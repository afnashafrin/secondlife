/**
 * SecondLife AI - Application Controller & DOM Handler
 * Free, Beginner-friendly, Zero-cost Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
    // Form & Input Elements
    const reuseForm = document.getElementById('reuse-form');
    const itemInput = document.getElementById('item-input');
    const itemError = document.getElementById('item-error');
    const categoryRadios = document.querySelectorAll('input[name="category"]');
    const conditionRadios = document.querySelectorAll('input[name="condition"]');
    const toolCheckboxes = document.querySelectorAll('input[name="tools"]');
    const budgetSelect = document.getElementById('budget-select');
    const skillSelect = document.getElementById('skill-select');
    
    // UI Feedback & Sections
    const loadingBox = document.getElementById('loading-box');
    const loadingSubtext = document.getElementById('loading-subtext');
    const hazardBox = document.getElementById('hazard-box');
    const resultsSection = document.getElementById('results-section');
    const projectsContainer = document.getElementById('projects-container');
    const resetBtn = document.getElementById('reset-btn');
    const quickPickChips = document.querySelectorAll('.chip-btn');

    // Application State
    let currentResults = [];
    let currentItem = '';

    // Quick Inspiration Chips (One-click presets)
    quickPickChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const itemValue = chip.getAttribute('data-item');
            const categoryValue = chip.getAttribute('data-cat') || 'all';

            itemInput.value = itemValue;
            itemInput.classList.remove('input-error');
            itemError.classList.remove('show');

            // Select corresponding category
            categoryRadios.forEach(r => {
                r.checked = (r.value === categoryValue);
            });

            // Auto-trigger analysis for seamless user experience
            triggerGeneration();
        });
    });

    // Form Submit Handler
    reuseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        triggerGeneration();
    });

    // Live Validation Feedback Removal on Typing
    itemInput.addEventListener('input', () => {
        if (itemInput.value.trim().length > 0) {
            itemInput.classList.remove('input-error');
            itemError.classList.remove('show');
        }
    });

    // Start Another Project / Reset Button
    resetBtn.addEventListener('click', () => {
        reuseForm.reset();
        resultsSection.classList.remove('show');
        hazardBox.classList.remove('show');
        itemInput.focus();
        reuseForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    /**
     * Executes input validation, displays loading animation, and runs the offline suggestion engine
     */
    function triggerGeneration() {
        const itemVal = itemInput.value.trim();

        // 1. Input Validation
        if (!itemVal || itemVal.length < 2) {
            itemInput.classList.add('input-error');
            itemError.classList.add('show');
            itemInput.focus();
            return;
        }

        itemInput.classList.remove('input-error');
        itemError.classList.remove('show');

        // Extract Form Values
        const selectedCondition = document.querySelector('input[name="condition"]:checked')?.value || 'good';
        const selectedCategory = document.querySelector('input[name="category"]:checked')?.value || 'all';
        const selectedBudget = budgetSelect.value;
        const selectedSkill = skillSelect.value;
        const selectedTools = Array.from(toolCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        // Hide previous results and hazards
        resultsSection.classList.remove('show');
        hazardBox.classList.remove('show');

        // Show Animated Loading State with Eco-Tips
        loadingBox.classList.add('active');
        loadingBox.scrollIntoView({ behavior: 'smooth', block: 'center' });

        const loadingTips = [
            "Assessing material durability & safety...",
            "Matching zero-waste upcycling recipes...",
            "Checking beginner-friendly tool requirements...",
            "Optimizing for ₹0 budget household reuse..."
        ];

        let tipIndex = 0;
        const tipInterval = setInterval(() => {
            tipIndex = (tipIndex + 1) % loadingTips.length;
            loadingSubtext.textContent = loadingTips[tipIndex];
        }, 300);

        // Simulated brief processing delay (~600ms) for smooth UX feel
        setTimeout(() => {
            clearInterval(tipInterval);
            loadingBox.classList.remove('active');

            // Query the client-side rule-based suggestion engine
            const response = window.secondLifeEngine.getSuggestions({
                item: itemVal,
                condition: selectedCondition,
                category: selectedCategory,
                tools: selectedTools,
                budget: selectedBudget,
                skill: selectedSkill
            });

            handleEngineResponse(response, itemVal);
        }, 650);
    }

    /**
     * Handles engine response: Displays hazard alerts or renders suggestion cards
     */
    function handleEngineResponse(response, itemVal) {
        currentItem = itemVal;

        if (response.status === 'hazard') {
            displayHazard(response.hazard);
            return;
        }

        currentResults = response.results || [];
        if (currentResults.length === 0) {
            alert('No suitable projects found. Please try another item description!');
            return;
        }

        renderProjects(currentResults);
        resultsSection.classList.add('show');
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    /**
     * Displays safety warnings when dangerous or toxic items are detected
     */
    function displayHazard(hazard) {
        const hazardTitle = document.getElementById('hazard-title');
        const hazardReason = document.getElementById('hazard-reason');
        const hazardGuidance = document.getElementById('hazard-guidance');

        hazardTitle.textContent = `Safety Advisory: ${hazard.name} (Danger: ${hazard.dangerLevel})`;
        hazardReason.textContent = hazard.reason;
        hazardGuidance.innerHTML = `<strong>Proper Disposal Guidance:</strong> ${hazard.guidance}`;

        hazardBox.classList.add('show');
        hazardBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    /**
     * Renders project cards into the DOM
     */
    function renderProjects(projects) {
        projectsContainer.innerHTML = '';

        projects.forEach((proj, index) => {
            const card = document.createElement('article');
            card.className = 'project-card';
            card.id = `project-card-${index}`;

            const categoryBadgeClass = `badge-${proj.category}`;
            const difficultyBadgeClass = `badge-${proj.difficulty}`;

            const materialsHtml = proj.materials.map(m => `<li>${escapeHtml(m)}</li>`).join('');
            const stepsHtml = proj.steps.map(s => `<li>${escapeHtml(s)}</li>`).join('');

            card.innerHTML = `
                <div class="card-top">
                    <div class="badges-bar">
                        <span class="badge ${categoryBadgeClass}">🏷️ ${capitalize(proj.category)}</span>
                        <span class="badge ${difficultyBadgeClass}">⚡ ${capitalize(proj.difficulty)}</span>
                        <span class="badge badge-eco">🌱 Upcycled</span>
                    </div>
                    <h3 class="project-title" id="title-${index}">${escapeHtml(proj.title)}</h3>
                    <div class="project-meta-row">
                        <span class="meta-item">⏱️ Time: <strong>${escapeHtml(proj.timeEstimate)}</strong></span>
                        <span class="meta-item">💰 Budget: <strong>${escapeHtml(proj.budgetEstimate)}</strong></span>
                        <span class="meta-item">🛠️ Tools: <strong>${escapeHtml(proj.tools ? proj.tools.join(', ') : 'Simple tools')}</strong></span>
                    </div>
                </div>

                <div class="card-body">
                    <div class="eco-impact-box">
                        <span>🌍</span>
                        <div><strong>Eco Impact:</strong> ${escapeHtml(proj.ecoImpact)}</div>
                    </div>

                    ${proj.safetyNotes ? `
                    <div class="safety-box">
                        <span>⚠️</span>
                        <div id="safety-${index}"><strong>Safety Note:</strong> ${escapeHtml(proj.safetyNotes)}</div>
                    </div>` : ''}

                    <h4 class="section-subtitle">📦 What You'll Need</h4>
                    <ul class="materials-list" id="materials-${index}">
                        ${materialsHtml}
                    </ul>

                    <h4 class="section-subtitle">📋 Step-by-Step Instructions</h4>
                    <ol class="steps-list" id="steps-${index}">
                        ${stepsHtml}
                    </ol>
                </div>

                <div class="card-actions-bar">
                    <span class="actions-label">Explore Variations:</span>
                    <div class="variations-group">
                        <button type="button" class="var-btn" data-action="cheaper" data-index="${index}">
                            💡 Cheaper (₹0)
                        </button>
                        <button type="button" class="var-btn" data-action="simpler" data-index="${index}">
                            ⚡ Simpler
                        </button>
                        <button type="button" class="var-btn" data-action="safer" data-index="${index}">
                            🛡️ Extra Safe
                        </button>
                        <button type="button" class="var-btn" data-action="alt" data-index="${index}">
                            🔄 Alternative
                        </button>
                    </div>
                </div>
            `;

            projectsContainer.appendChild(card);
        });

        attachVariationListeners();
    }

    /**
     * Attaches click handlers to the variation buttons
     */
    function attachVariationListeners() {
        const varButtons = document.querySelectorAll('.var-btn');
        varButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.getAttribute('data-action');
                const index = parseInt(btn.getAttribute('data-index'), 10);
                const project = currentResults[index];
                if (!project) return;

                // Toggle active state visual on button
                btn.parentElement.querySelectorAll('.var-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                if (action === 'cheaper') {
                    const cheaperProj = window.secondLifeEngine.getCheaperVariation(project);
                    updateCardContent(index, cheaperProj);
                } else if (action === 'simpler') {
                    const simplerProj = window.secondLifeEngine.getSimplerVariation(project);
                    updateCardContent(index, simplerProj);
                } else if (action === 'safer') {
                    const saferProj = window.secondLifeEngine.getSaferVariation(project);
                    updateCardContent(index, saferProj);
                } else if (action === 'alt') {
                    cycleAlternative(index);
                }
            });
        });
    }

    /**
     * In-place card update with smooth feedback
     */
    function updateCardContent(index, updatedProj) {
        const titleEl = document.getElementById(`title-${index}`);
        const materialsEl = document.getElementById(`materials-${index}`);
        const stepsEl = document.getElementById(`steps-${index}`);
        const safetyEl = document.getElementById(`safety-${index}`);

        if (titleEl) titleEl.textContent = updatedProj.title;
        if (materialsEl) {
            materialsEl.innerHTML = updatedProj.materials.map(m => `<li>${escapeHtml(m)}</li>`).join('');
        }
        if (stepsEl) {
            stepsEl.innerHTML = updatedProj.steps.map(s => `<li>${escapeHtml(s)}</li>`).join('');
        }
        if (safetyEl && updatedProj.safetyNotes) {
            safetyEl.innerHTML = `<strong>Safety Note:</strong> ${escapeHtml(updatedProj.safetyNotes)}`;
        }
    }

    /**
     * Cycles to an alternative suggestion
     */
    function cycleAlternative(index) {
        const categories = ['practical', 'storage', 'decorative'];
        const currentCat = currentResults[index].category;
        const nextCat = categories[(categories.indexOf(currentCat) + 1) % categories.length];

        const altResults = window.secondLifeEngine.synthesizeCustomProjects(
            currentItem,
            'good',
            nextCat,
            ['scissors', 'glue'],
            'zero',
            'beginner'
        );

        if (altResults && altResults[0]) {
            currentResults[index] = altResults[0];
            updateCardContent(index, altResults[0]);
        }
    }

    // Utility Helpers
    function capitalize(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
});
