/**
 * EcoBuild i18n - Internationalization Module
 * Supports: French (fr), Dutch (nl), English (en)
 * Default language: French
 */

const I18n = (function() {
    // Embedded translations
    const translations = {
        fr: {
            meta: {
                title: "EcoBuild — Maisons Préfabriquées Écologiques | Montées en 12h",
                description: "Maisons préfabriquées écologiques, 95% construites en usine, assemblées sur votre terrain en 8-12 heures. Clés en main."
            },
            nav: {
                about: "Objectifs",
                process: "Étapes",
                models: "Produits",
                contact: "Contact"
            },
            mobileMenu: {
                close: "Fermer le menu",
                followUs: "Suivez-nous",
                language: "Langue"
            },
            hero: {
                eyebrow: "Macédoine du Nord",
                titleLine1: "Votre maison,",
                titleLine2: "montée en",
                titleHighlight: "12 heures",
                description: "Maisons préfabriquées écologiques. 95% construites en usine. Livrées et assemblées sur votre terrain. Clés en main.",
                ctaQuote: "Demander un devis",
                ctaProcess: "Comment ça marche",
                stats: {
                    prefab: { value: "95%", label: "Préfabriqué" },
                    assembly: { value: "8-12h", label: "Assemblage" },
                    models: { value: "6", label: "Modèles" },
                    turnkey: { value: "1 jour", label: "Clés en main" }
                }
            },
            about: {
                tag: "Ce qu'on fait",
                title: "Des maisons écologiques,<br>pas des chantiers",
                description: "Fabrication en usine. Livraison sur terrain. Assemblage en une journée. Simple.",
                badge: { value: "95%", label: "Hors-site" },
                features: {
                    eco: {
                        title: "Durable & Éco-énergétique",
                        description: "Matériaux écologiques et solutions énergétiques intelligentes."
                    },
                    fast: {
                        title: "Rapide & Sans tracas",
                        description: "Modules préfabriqués. Assemblage en 8 à 12 heures."
                    },
                    custom: {
                        title: "Flexible & Personnalisable",
                        description: "Large choix de plans et finitions. Votre style."
                    },
                    quality: {
                        title: "Haute qualité & Durable",
                        description: "Fabrication contrôlée. Qualité garantie."
                    }
                }
            },
            process: {
                tag: "Processus",
                title: "4 étapes simples",
                steps: {
                    design: { label: "Étape 01", title: "Design", description: "Choisissez votre modèle. Personnalisez avec nos architectes." },
                    fabrication: { label: "Étape 02", title: "Fabrication", description: "Construction en usine. Qualité contrôlée." },
                    assembly: { label: "Étape 03", title: "Assemblage", description: "Livraison sur site. Montage par nos équipes." },
                    movein: { label: "Étape 04", title: "Emménagez", description: "Raccordements finalisés. Vos clés en main." }
                },
                result: {
                    label: "Résultat final",
                    title: "Du terrain vide à maison habitable",
                    subtitle: "En une seule journée, votre nouvelle vie commence",
                    stats: {
                        factory: { value: "95%", label: "En usine" },
                        onsite: { value: "8-12h", label: "Sur site" },
                        total: { value: "1 jour", label: "Total" }
                    }
                }
            },
            models: {
                tag: "Nos modèles",
                title: "6 designs, personnalisables",
                modalTag: "Modèle EcoBuild",
                advisors: { status: "5 conseillers en ligne", note: "Experts qualifiés disponibles" },
                cta: "Parler à un conseiller",
                note: "Personnalisable selon vos besoins",
                items: {
                    aurora: { name: "Aurora", description: "Design moderne avec grandes fenêtres panoramiques et finitions bois naturel.", features: "Grandes baies vitrées,Finitions bois naturel,Design contemporain,Lumière naturelle optimisée" },
                    terranova: { name: "Terra Nova", description: "Architecture contemporaine avec terrasse intégrée et bardage bois élégant.", features: "Terrasse intégrée,Bardage bois élégant,Architecture contemporaine,Espaces extérieurs" },
                    zenith: { name: "Zenith", description: "Modèle spacieux au design minimaliste. Lignes épurées et volumes généreux.", features: "Design minimaliste,Lignes épurées,Volumes généreux,Espaces ouverts" },
                    aria: { name: "Aria", description: "Format compact et élégant. Parfait pour les terrains plus intimes.", features: "Format compact,Design élégant,Optimisé petit terrain,Fonctionnel" },
                    serenity: { name: "Serenity", description: "Baies vitrées panoramiques pour une connexion totale avec la nature.", features: "Baies vitrées panoramiques,Connexion nature,Vue dégagée,Luminosité maximale" },
                    lumine: { name: "Luminé", description: "Design lumineux avec volumes généreux et espaces de vie ouverts.", features: "Design lumineux,Volumes généreux,Espaces de vie ouverts,Circulation fluide" }
                }
            },
            contact: {
                tag: "Contact",
                title: "Démarrez",
                titleAccent: "votre projet",
                cta: "Parler à un conseiller",
                trust: { immediate: "Réponse immédiate", noCommitment: "Sans engagement" }
            },
            footer: {
                brand: "Maisons préfabriquées écologiques. Fabriquées en Macédoine, livrées en Europe.",
                navigation: "Navigation",
                models: "Modèles",
                contact: "Contact",
                startProject: "Démarrer un projet",
                location: "Kadri Bazi 170, Skopje 1045<br>North Macedonia",
                rights: "Tous droits réservés.",
                designedBy: "Conçu par",
                followUs: "Suivez-nous"
            },
            common: { close: "Fermer" }
        },
        nl: {
            meta: {
                title: "EcoBuild — Ecologische Prefabwoningen | Gemonteerd in 12u",
                description: "Ecologische prefabwoningen, 95% gebouwd in de fabriek, gemonteerd op uw terrein in 8-12 uur. Sleutel-op-de-deur."
            },
            nav: {
                about: "Doelstellingen",
                process: "Stappen",
                models: "Producten",
                contact: "Contact"
            },
            mobileMenu: {
                close: "Menu sluiten",
                followUs: "Volg ons",
                language: "Taal"
            },
            hero: {
                eyebrow: "Noord-Macedonië",
                titleLine1: "Uw woning,",
                titleLine2: "gemonteerd in",
                titleHighlight: "12 uur",
                description: "Ecologische prefabwoningen. 95% gebouwd in de fabriek. Geleverd en gemonteerd op uw terrein. Sleutel-op-de-deur.",
                ctaQuote: "Offerte aanvragen",
                ctaProcess: "Hoe werkt het",
                stats: {
                    prefab: { value: "95%", label: "Prefab" },
                    assembly: { value: "8-12u", label: "Montage" },
                    models: { value: "6", label: "Modellen" },
                    turnkey: { value: "1 dag", label: "Sleutel-op-de-deur" }
                }
            },
            about: {
                tag: "Wat we doen",
                title: "Ecologische woningen,<br>geen bouwwerven",
                description: "Fabricage in de fabriek. Levering op terrein. Montage in één dag. Simpel.",
                badge: { value: "95%", label: "Off-site" },
                features: {
                    eco: {
                        title: "Duurzaam & Energiezuinig",
                        description: "Ecologische materialen en slimme energieoplossingen."
                    },
                    fast: {
                        title: "Snel & Zorgeloos",
                        description: "Prefab modules. Montage in 8 tot 12 uur."
                    },
                    custom: {
                        title: "Flexibel & Aanpasbaar",
                        description: "Ruime keuze aan plannen en afwerkingen. Uw stijl."
                    },
                    quality: {
                        title: "Hoge kwaliteit & Duurzaam",
                        description: "Gecontroleerde fabricage. Gegarandeerde kwaliteit."
                    }
                }
            },
            process: {
                tag: "Proces",
                title: "4 eenvoudige stappen",
                steps: {
                    design: { label: "Stap 01", title: "Design", description: "Kies uw model. Personaliseer met onze architecten." },
                    fabrication: { label: "Stap 02", title: "Fabricage", description: "Bouw in de fabriek. Gecontroleerde kwaliteit." },
                    assembly: { label: "Stap 03", title: "Montage", description: "Levering op locatie. Montage door onze teams." },
                    movein: { label: "Stap 04", title: "Intrekken", description: "Aansluitingen afgerond. Uw sleutels in handen." }
                },
                result: {
                    label: "Eindresultaat",
                    title: "Van leeg terrein naar bewoonbare woning",
                    subtitle: "In slechts één dag begint uw nieuwe leven",
                    stats: {
                        factory: { value: "95%", label: "In fabriek" },
                        onsite: { value: "8-12u", label: "Op locatie" },
                        total: { value: "1 dag", label: "Totaal" }
                    }
                }
            },
            models: {
                tag: "Onze modellen",
                title: "6 designs, aanpasbaar",
                modalTag: "EcoBuild Model",
                advisors: { status: "5 adviseurs online", note: "Gekwalificeerde experts beschikbaar" },
                cta: "Praat met een adviseur",
                note: "Aanpasbaar aan uw behoeften",
                items: {
                    aurora: { name: "Aurora", description: "Modern design met grote panoramische ramen en natuurlijke houtafwerking.", features: "Grote glaspartijen,Natuurlijke houtafwerking,Hedendaags design,Geoptimaliseerd natuurlijk licht" },
                    terranova: { name: "Terra Nova", description: "Hedendaagse architectuur met geïntegreerd terras en elegante houten gevelbekleding.", features: "Geïntegreerd terras,Elegante houten gevelbekleding,Hedendaagse architectuur,Buitenruimtes" },
                    zenith: { name: "Zenith", description: "Ruim model met minimalistisch design. Strakke lijnen en royale volumes.", features: "Minimalistisch design,Strakke lijnen,Royale volumes,Open ruimtes" },
                    aria: { name: "Aria", description: "Compact en elegant formaat. Perfect voor kleinere terreinen.", features: "Compact formaat,Elegant design,Geoptimaliseerd voor klein terrein,Functioneel" },
                    serenity: { name: "Serenity", description: "Panoramische glaspartijen voor een totale verbinding met de natuur.", features: "Panoramische glaspartijen,Natuurverbinding,Vrij uitzicht,Maximale lichtinval" },
                    lumine: { name: "Luminé", description: "Lichtrijk design met royale volumes en open leefruimtes.", features: "Lichtrijk design,Royale volumes,Open leefruimtes,Vloeiende circulatie" }
                }
            },
            contact: {
                tag: "Contact",
                title: "Start",
                titleAccent: "uw project",
                cta: "Praat met een adviseur",
                trust: { immediate: "Directe reactie", noCommitment: "Vrijblijvend" }
            },
            footer: {
                brand: "Ecologische prefabwoningen. Gefabriceerd in Macedonië, geleverd in Europa.",
                navigation: "Navigatie",
                models: "Modellen",
                contact: "Contact",
                startProject: "Project starten",
                location: "Kadri Bazi 170, Skopje 1045<br>Noord-Macedonië",
                rights: "Alle rechten voorbehouden.",
                designedBy: "Ontworpen door",
                followUs: "Volg ons"
            },
            common: { close: "Sluiten" }
        },
        en: {
            meta: {
                title: "EcoBuild — Ecological Prefab Homes | Assembled in 12h",
                description: "Ecological prefab homes, 95% built in factory, assembled on your land in 8-12 hours. Turnkey."
            },
            nav: {
                about: "Objectives",
                process: "Steps",
                models: "Products",
                contact: "Contact"
            },
            mobileMenu: {
                close: "Close menu",
                followUs: "Follow us",
                language: "Language"
            },
            hero: {
                eyebrow: "North Macedonia",
                titleLine1: "Your home,",
                titleLine2: "assembled in",
                titleHighlight: "12 hours",
                description: "Ecological prefab homes. 95% built in factory. Delivered and assembled on your land. Turnkey.",
                ctaQuote: "Request a quote",
                ctaProcess: "How it works",
                stats: {
                    prefab: { value: "95%", label: "Prefab" },
                    assembly: { value: "8-12h", label: "Assembly" },
                    models: { value: "6", label: "Models" },
                    turnkey: { value: "1 day", label: "Turnkey" }
                }
            },
            about: {
                tag: "What we do",
                title: "Ecological homes,<br>not construction sites",
                description: "Factory manufacturing. Site delivery. One-day assembly. Simple.",
                badge: { value: "95%", label: "Off-site" },
                features: {
                    eco: {
                        title: "Sustainable & Energy Efficient",
                        description: "Ecological materials and smart energy solutions."
                    },
                    fast: {
                        title: "Fast & Hassle-Free",
                        description: "Prefab modules. Assembly in 8 to 12 hours."
                    },
                    custom: {
                        title: "Flexible & Customizable",
                        description: "Wide choice of plans and finishes. Your style."
                    },
                    quality: {
                        title: "High-Quality & Durable",
                        description: "Controlled manufacturing. Guaranteed quality."
                    }
                }
            },
            process: {
                tag: "Process",
                title: "4 simple steps",
                steps: {
                    design: { label: "Step 01", title: "Design", description: "Choose your model. Customize with our architects." },
                    fabrication: { label: "Step 02", title: "Manufacturing", description: "Factory construction. Quality controlled." },
                    assembly: { label: "Step 03", title: "Assembly", description: "On-site delivery. Installation by our teams." },
                    movein: { label: "Step 04", title: "Move In", description: "Connections finalized. Your keys in hand." }
                },
                result: {
                    label: "Final result",
                    title: "From empty land to livable home",
                    subtitle: "In just one day, your new life begins",
                    stats: {
                        factory: { value: "95%", label: "In factory" },
                        onsite: { value: "8-12h", label: "On site" },
                        total: { value: "1 day", label: "Total" }
                    }
                }
            },
            models: {
                tag: "Our models",
                title: "6 designs, customizable",
                modalTag: "EcoBuild Model",
                advisors: { status: "5 advisors online", note: "Qualified experts available" },
                cta: "Talk to an advisor",
                note: "Customizable to your needs",
                items: {
                    aurora: { name: "Aurora", description: "Modern design with large panoramic windows and natural wood finishes.", features: "Large bay windows,Natural wood finishes,Contemporary design,Optimized natural light" },
                    terranova: { name: "Terra Nova", description: "Contemporary architecture with integrated terrace and elegant wood cladding.", features: "Integrated terrace,Elegant wood cladding,Contemporary architecture,Outdoor spaces" },
                    zenith: { name: "Zenith", description: "Spacious model with minimalist design. Clean lines and generous volumes.", features: "Minimalist design,Clean lines,Generous volumes,Open spaces" },
                    aria: { name: "Aria", description: "Compact and elegant format. Perfect for smaller plots.", features: "Compact format,Elegant design,Optimized for small plot,Functional" },
                    serenity: { name: "Serenity", description: "Panoramic bay windows for a total connection with nature.", features: "Panoramic bay windows,Nature connection,Clear view,Maximum brightness" },
                    lumine: { name: "Luminé", description: "Bright design with generous volumes and open living spaces.", features: "Bright design,Generous volumes,Open living spaces,Fluid circulation" }
                }
            },
            contact: {
                tag: "Contact",
                title: "Start",
                titleAccent: "your project",
                cta: "Talk to an advisor",
                trust: { immediate: "Immediate response", noCommitment: "No commitment" }
            },
            footer: {
                brand: "Ecological prefab homes. Made in Macedonia, delivered in Europe.",
                navigation: "Navigation",
                models: "Models",
                contact: "Contact",
                startProject: "Start a project",
                location: "Kadri Bazi 170, Skopje 1045<br>North Macedonia",
                rights: "All rights reserved.",
                designedBy: "Designed by",
                followUs: "Follow us"
            },
            common: { close: "Close" }
        }
    };

    // Configuration
    const config = {
        defaultLang: 'fr',
        supportedLangs: ['fr', 'nl', 'en'],
        storageKey: 'ecobuild_lang'
    };

    // State
    let currentLang = config.defaultLang;
    let isLoaded = false;

    /**
     * Get nested property from object using dot notation
     */
    function getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => {
            return current && current[key] !== undefined ? current[key] : undefined;
        }, obj);
    }

    /**
     * Detect user's preferred language
     */
    function detectLanguage() {
        const stored = localStorage.getItem(config.storageKey);
        if (stored && config.supportedLangs.includes(stored)) {
            return stored;
        }
        const browserLang = navigator.language.split('-')[0];
        if (config.supportedLangs.includes(browserLang)) {
            return browserLang;
        }
        return config.defaultLang;
    }

    /**
     * Get translation for a key
     */
    function t(key, params = {}) {
        const translation = getNestedValue(translations[currentLang], key);
        if (translation === undefined) {
            console.warn(`Translation missing: ${key}`);
            return key;
        }
        let result = translation;
        Object.keys(params).forEach(param => {
            result = result.replace(new RegExp(`{${param}}`, 'g'), params[param]);
        });
        return result;
    }

    /**
     * Update all elements with data-i18n attribute
     */
    function updateDOM() {
        // Update text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = t(key);
            if (el.hasAttribute('data-i18n-html')) {
                el.innerHTML = translation;
            } else {
                el.textContent = translation;
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = currentLang;

        // Update page title
        const metaTitle = t('meta.title');
        if (metaTitle && metaTitle !== 'meta.title') {
            document.title = metaTitle;
        }

        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            const descTranslation = t('meta.description');
            if (descTranslation && descTranslation !== 'meta.description') {
                metaDesc.content = descTranslation;
            }
        }

        // Update model cards
        updateModelCards();

        // Update language selector
        updateLanguageSelector();

        // Dispatch event
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: currentLang } }));
    }

    /**
     * Update model cards with translated data
     */
    function updateModelCards() {
        document.querySelectorAll('.model-card[data-model]').forEach(card => {
            const modelKey = card.dataset.model.replace('-', '');
            const modelData = getNestedValue(translations[currentLang], `models.items.${modelKey}`);
            if (modelData) {
                card.dataset.name = modelData.name;
                card.dataset.desc = modelData.description;
                card.dataset.features = modelData.features;
                const nameEl = card.querySelector('.model-name');
                const descEl = card.querySelector('.model-desc');
                if (nameEl) nameEl.textContent = modelData.name;
                if (descEl) descEl.textContent = modelData.description;
            }
        });
    }

    /**
     * Update language selector active state
     */
    function updateLanguageSelector() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === currentLang);
        });
    }

    /**
     * Change current language
     */
    function setLanguage(lang) {
        if (!config.supportedLangs.includes(lang)) return;
        if (lang === currentLang && isLoaded) return;
        currentLang = lang;
        localStorage.setItem(config.storageKey, lang);
        updateDOM();
    }

    /**
     * Get current language
     */
    function getLanguage() {
        return currentLang;
    }

    /**
     * Initialize i18n
     */
    function init() {
        currentLang = detectLanguage();
        isLoaded = true;
        updateDOM();

        // Setup click handlers
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (btn.dataset.lang) {
                    setLanguage(btn.dataset.lang);
                }
            });
        });
    }

    // Public API
    return { init, t, setLanguage, getLanguage, updateDOM };
})();

// Auto-initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => I18n.init());
} else {
    I18n.init();
}
