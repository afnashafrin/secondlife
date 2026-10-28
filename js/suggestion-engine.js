/**
 * SecondLife AI - Suggestion Engine & Decision Component
 * Pure Client-Side, Zero API Costs, 100% Free & Transparent
 */

class SecondLifeEngine {
    constructor() {
        this.database = PROJECTS_DATABASE;
        this.hazardList = HAZARDOUS_ITEMS;
    }

    /**
     * Inspects user input for dangerous or toxic items.
     * Prevents dangerous DIY procedures.
     */
    checkSafety(itemText) {
        if (!itemText || typeof itemText !== 'string') return null;
        const normalized = itemText.toLowerCase().trim();

        for (const hazard of this.hazardList) {
            for (const keyword of hazard.keywords) {
                // Word boundary or substring check
                const regex = new RegExp(`\\b${keyword}\\b`, 'i');
                if (regex.test(normalized) || normalized.includes(keyword)) {
                    return {
                        isHazardous: true,
                        name: hazard.name,
                        dangerLevel: hazard.dangerLevel,
                        reason: hazard.reason,
                        guidance: hazard.guidance
                    };
                }
            }
        }
        return { isHazardous: false };
    }

    /**
     * Finds matches in database or generates dynamic creative suggestions
     */
    getSuggestions(params) {
        const {
            item,
            condition = 'good',
            category = 'all',
            tools = [],
            budget = 'zero',
            skill = 'beginner'
        } = params;

        // 1. First check safety
        const hazardCheck = this.checkSafety(item);
        if (hazardCheck && hazardCheck.isHazardous) {
            return {
                status: 'hazard',
                hazard: hazardCheck
            };
        }

        // 2. Search database by keywords
        const normalizedItem = item.toLowerCase().trim();
        const words = normalizedItem.split(/\s+/).filter(w => w.length > 2);

        let scoredMatches = [];

        for (const project of this.database) {
            let kwScore = 0;

            // Direct keyword matching
            for (const kw of project.keywords) {
                if (normalizedItem.includes(kw) || kw.includes(normalizedItem)) {
                    kwScore += 5;
                }
                for (const word of words) {
                    if (kw.includes(word)) kwScore += 2;
                }
            }

            // Material group check
            if (normalizedItem.includes(project.materialGroup)) {
                kwScore += 3;
            }

            // Only score secondary factors if this project genuinely relates to the item
            if (kwScore > 0) {
                let totalScore = kwScore;

                // Category match bonus
                if (category !== 'all') {
                    if (project.category === category) {
                        totalScore += 3;
                    } else {
                        totalScore -= 2; // de-prioritize non-matching categories
                    }
                }

                // Skill level suitability
                if (skill === 'beginner' && project.difficulty === 'beginner') {
                    totalScore += 2;
                } else if (skill === 'advanced' && project.difficulty === 'advanced') {
                    totalScore += 1;
                }

                // Tool compatibility check
                const neededTools = project.tools || [];
                const hasTools = neededTools.filter(t => tools.includes(t) || tools.includes('none'));
                if (hasTools.length > 0 || neededTools.length === 0) {
                    totalScore += 1;
                }

                scoredMatches.push({ project, score: totalScore });
            }
        }

        // Sort descending by score
        scoredMatches.sort((a, b) => b.score - a.score);

        let results = [];
        if (scoredMatches.length > 0) {
            // Pick top matches
            results = scoredMatches.map(m => m.project);
        } else {
            // If no exact match, dynamically synthesize creative reuse ideas for this custom item!
            results = this.synthesizeCustomProjects(item, condition, category, tools, budget, skill);
        }

        // Filter by category if strictly requested and multiple available
        if (category !== 'all') {
            const strictlyFiltered = results.filter(p => p.category === category);
            if (strictlyFiltered.length > 0) {
                results = strictlyFiltered;
            }
        }

        return {
            status: 'success',
            item: item,
            results: results
        };
    }

    /**
     * Intelligently synthesizes a creative reuse plan when an unlisted item is provided
     */
    synthesizeCustomProjects(item, condition, category, tools, budget, skill) {
        const cleanItem = item.trim();
        const capitalizedItem = cleanItem.charAt(0).toUpperCase() + cleanItem.slice(1);
        const categories = category === 'all' ? ['practical', 'storage', 'decorative'] : [category];

        return categories.map((cat, idx) => {
            const template = GENERIC_RECIPE_TEMPLATES[cat] || GENERIC_RECIPE_TEMPLATES.practical;
            const diff = skill === 'advanced' ? 'intermediate' : 'beginner';
            const toolsText = tools.length > 0 && !tools.includes('none') ? tools.join(', ') : 'Basic scissors or hands';

            return {
                id: `dynamic-${cat}-${idx}`,
                materialGroup: 'custom',
                keywords: [cleanItem.toLowerCase()],
                title: `${capitalizedItem} ${template.titleSuffix}`,
                category: cat,
                difficulty: diff,
                timeEstimate: '20 to 30 mins',
                budgetEstimate: budget === 'zero' ? '₹0 (Free with household items)' : 'Under ₹100',
                ecoImpact: `${template.ecoNote} Preserves materials from landfill.`,
                materials: [
                    `Your ${condition} condition ${cleanItem}`,
                    'Scrap paper, string, or natural twine for securing',
                    'Cardboard backing or scrap fabric if reinforcement is needed',
                    'Non-toxic household craft adhesive or tape'
                ],
                tools: [toolsText],
                safetyNotes: `Examine the ${cleanItem} for sharp corners, rough splinters, or dirt. Clean thoroughly and wear gloves if handling rough edges.`,
                steps: [
                    `Clean and inspect: Wash or wipe down your ${cleanItem} with a damp cloth and warm soapy water. Allow to air dry thoroughly.`,
                    `Planning the form: Decide which portion of the ${cleanItem} has the highest structural strength (e.g. base, rim, or hollow section).`,
                    `Refining & smoothing: Use sandpaper or masking tape to cover any sharp burrs or rough edges.`,
                    `Assembly: Following the ${cat} layout, ${template.stepAction} your ${cleanItem} into its new dedicated configuration.`,
                    `Finishing touch: Personalize with scrap materials, twine, or handwritten eco-friendly labels.`
                ]
            };
        });
    }

    /**
     * Generates a "Cheaper" variation (guarantees ₹0 supplies)
     */
    getCheaperVariation(project) {
        const cloned = JSON.parse(JSON.stringify(project));
        cloned.title = `₹0 Budget Hack: ${cloned.title}`;
        cloned.budgetEstimate = '₹0 (Strictly Free - Zero Expense)';
        cloned.materials = cloned.materials.map(m => {
            if (m.toLowerCase().includes('buy') || m.toLowerCase().includes('paint') || m.toLowerCase().includes('lights')) {
                return `${m} → Replace with scrap paper, homemade flour paste, or natural sun drying`;
            }
            return m;
        });
        cloned.steps.unshift('Budget Tip: Avoid buying new craft supplies. Use kitchen flour-water paste as glue and repurposed cardboard scraps for bracing.');
        cloned.variationType = 'cheaper';
        return cloned;
    }

    /**
     * Generates a "Simpler" variation (cuts steps down, beginner-friendly)
     */
    getSimplerVariation(project) {
        const cloned = JSON.parse(JSON.stringify(project));
        cloned.title = `Quick & Simple: ${cloned.title}`;
        cloned.difficulty = 'beginner';
        cloned.timeEstimate = '10 mins (Express Version)';
        cloned.steps = [
            `Quick Clean: Wipe down the ${project.keywords[0] || 'item'} with a cloth.`,
            'Minimal Modification: Use existing folds, openings, or pockets without measuring or cutting complex angles.',
            'Instant Use: Place immediately into your room or desk as a direct organizer or display piece.'
        ];
        cloned.safetyNotes = 'Simplified method requires no power tools or hot glue—safe for quick crafting.';
        cloned.variationType = 'simpler';
        return cloned;
    }

    /**
     * Generates a "Safer" variation (prioritizes no-cut, no-heat, low-risk)
     */
    getSaferVariation(project) {
        const cloned = JSON.parse(JSON.stringify(project));
        cloned.title = `Extra-Safe & Child-Friendly: ${cloned.title}`;
        cloned.difficulty = 'beginner';
        cloned.tools = ['Hands only', 'Child-safe scissors', 'Non-toxic glue stick'];
        cloned.safetyNotes = '🟢 100% Low-Risk: Eliminates sharp razor blades, hot glue guns, and electric drills. Replaced with safe paper tape, tearing, and non-toxic water-based glue.';
        cloned.steps = cloned.steps.map(step => {
            return step
                .replace(/utility knife|box cutter|drill|nail|hammer/gi, 'heavy-duty tape or gentle folding')
                .replace(/hot glue gun|molten glue/gi, 'double-sided tape or school glue');
        });
        cloned.variationType = 'safer';
        return cloned;
    }
}

// Global instance for browser and module environments
if (typeof window !== 'undefined') {
    window.secondLifeEngine = new SecondLifeEngine();
} else if (typeof global !== 'undefined') {
    global.secondLifeEngine = new SecondLifeEngine();
}
