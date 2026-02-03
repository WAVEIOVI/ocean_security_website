import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            nav: {
                home: 'Home',
                services: 'Services',
                about: 'About',
                team: 'Team',
                portfolio: 'Portfolio',
                partners: 'Partners',
                contact: 'Contact',
                platform: 'Platform',
                get_quote: 'Get a Quote'
            },
            hero: {
                badge: 'Professional Security Solutions',
                title: 'Protecting What',
                title_accent: 'Matters Most.',
                description: 'Ocean Security provides elite fire safety solutions and high-performance protective equipment to safeguard your infrastructure in Tunisia.',
                cta_quote: 'Get a Professional Quote',
                cta_services: 'Our Services',
                feature_1: 'Certified Equipment',
                feature_2: '24/7 Response',
                feature_3: 'Tailored Solutions',
                stat_clients: 'Clients Guarded',
                stat_compliance: 'Compliance',
                step_1_title: 'Risk Assessment',
                step_1_desc: 'Expert diagnostic of fire hazards',
                step_2_title: 'Installation',
                step_2_desc: 'Precision equipment deployment',
                step_3_title: 'Maintenance',
                step_3_desc: '24/7 reliability monitoring'
            },
            services: {
                title: 'Our Services',
                subtitle: 'Comprehensive fire safety solutions tailored to protect what matters most to you',
                motto: 'Prevention is Better Than Cure',
                items: {
                    extinguishers: {
                        title: 'Fire Extinguishers',
                        desc: 'High-quality portable fire extinguishers including dry chemical (ABC, BC), CO2, water, foam, and wet chemical (Class K).'
                    },
                    alarms: {
                        title: 'Fire Alarm Systems',
                        desc: 'Early detection systems including smoke, heat, and flame detectors, control panels, and emergency lighting.'
                    },
                    suppression: {
                        title: 'Fire Suppression Systems',
                        desc: 'Sprinklers, foam, clean agent (FM-200, NOVEC 1230), and dry chemical systems tailored to hazards.'
                    },
                    maintenance: {
                        title: 'Inspection & Maintenance',
                        desc: 'Regular inspections, maintenance programs, and 24/7 emergency repair ensuring ISO and EN compliance.'
                    },
                    ppe: {
                        title: 'Personal Protective Equipment',
                        desc: 'Head, hand, body, and fall protection meeting OSHA and EN standards for industrial safety.'
                    },
                    training: {
                        title: 'Safety Training',
                        desc: 'Comprehensive programs on fire prevention, equipment use, and emergency protocols led by experts.'
                    },
                    customization: {
                        title: 'Customization & Branding',
                        desc: 'Personalization services for PPE including embroidery and printing to align with your corporate identity.'
                    },
                    specialized: {
                        title: 'Specialized Solutions',
                        desc: 'Tailored safety and PPE for oil & gas, maritime, and construction with unique compliance requirements.'
                    }
                },
                banner_title: 'Customization and Specialized Solutions',
                banner_quote: 'SAFETY IS FREE, USE PLENTY OF IT.',
                banner_text_1: 'At Ocean Security, we understand that every client has unique requirements and challenges. Our customer-centric approach ensures we provide tailored solutions.',
                banner_cta: 'Discuss Your Fire Safety Needs'
            },
            about: {
                badge: 'Trusted Security Provider',
                title: 'About Ocean Security',
                text_1: 'With over 7 years of combined experience, Ocean Security has become a leading provider of comprehensive safety solutions in Tunisia. Our mission is protection and peace of mind.',
                text_2: 'We prioritize safety and compliance. Our fire fighting equipment adheres to the highest industry standards including ISO and National Office of Civil Protection codes.',
                feature_team: 'Expert Team',
                feature_team_desc: 'Passionate professionals dedicated to safety',
                feature_leader: "Tunisia's Leader",
                feature_leader_desc: 'Leading provider of fire safety solutions',
                feature_response: '24/7 Response',
                feature_response_desc: 'Rapid support for all fire emergencies',
                feature_certified: 'Certified',
                feature_certified_desc: 'Meeting OSHA, EN, and ISO standards',
                values_title: 'Our Core Values',
                values_desc: 'Safety, Integrity, Excellence, and Innovation guide everything we do.',
                mission: 'We Need You Work Safely',
                mission_sub: 'Ocean Security Mission Statement',
                stat_exp: 'Years Experience',
                stat_clients: 'Trusting Clients',
                stat_commitment: 'Commitment'
            },
            portfolio: {
                title: 'Our',
                title_accent: 'Work.',
                subtitle: 'A curated showcase of our professional fire safety installations and premium equipment across Tunisia.',
                cat_all: 'All',
                cat_equip: 'Equipment',
                cat_install: 'Installation',
                cat_service: 'Service',
                cat_train: 'Training',
                view_image: 'View Full Image',
                view_video: 'Watch Case Study'
            },
            team: {
                title: 'Meet Our Team',
                subtitle: 'Our team of certified fire safety experts is dedicated to providing the highest level of protection',
                intro_title: 'Certified Expertise & Professionalism',
                intro_text: 'Our technicians and specialists hold recognized certifications from leading industry organizations for installation and maintenance.'
            },
            partners: {
                badge: 'Network of Excellence',
                title: 'Our Trusted Partners',
                text: 'Ocean Security is proud to safeguard the operations of Tunisia’s leading industrial and commercial entities.',
                cta_brand: 'Your Brand Here',
                cta_link: 'Get Protected',
                footer: 'Industry Leaders'
            },
            contact: {
                title: 'Contact Us',
                subtitle: 'Reach out to discuss your security needs or request a free consultation',
                info_title: 'Get In Touch',
                loc_title: 'Our Location',
                email_title: 'Email Us',
                call_title: 'Call Us',
                hours_title: 'Working Hours',
                hours_desc: 'Mon-Fri: 9AM - 5PM',
                emergency: '24/7 EMERGENCY SERVICE AVAILABLE',
                hotline: 'Fire Emergency Hot-line:',
                form_title: 'Send us a Message',
                label_name: 'Full Name *',
                label_email: 'Email Address *',
                label_phone: 'Phone Number',
                label_message: 'Your Message *',
                place_name: 'John Doe',
                place_email: 'john@example.com',
                place_phone: '+216 -- --- ---',
                place_message: 'How can we help you?',
                btn_send: 'Send Professional Inquiry',
                btn_sending: 'Sending...',
                success_title: 'Message Sent Successfully!',
                success_desc: 'Thank you for reaching out. Our team will contact you shortly.',
                error_title: 'Submission Failed',
                privacy: 'By clicking send, you agree to our privacy policy and terms of service.'
            },
            footer: {
                rights: 'All rights reserved.',
                emergency: 'Emergency 24/7',
                dev_by: 'Developed by WAVE VI'
            }
        }
    },
    fr: {
        translation: {
            nav: {
                home: 'Accueil',
                services: 'Services',
                about: 'À Propos',
                team: 'Équipe',
                portfolio: 'Portfolio',
                partners: 'Partenaires',
                contact: 'Contact',
                platform: 'Plateforme',
                get_quote: 'Devis Gratuit'
            },
            hero: {
                badge: 'Solutions de Sécurité Professionnelles',
                title: 'Protéger Ce Qui',
                title_accent: 'Compte Le Plus.',
                description: 'Ocean Security fournit des solutions de sécurité incendie d’élite et des équipements de protection haute performance pour sauvegarder votre infrastructure en Tunisie.',
                cta_quote: 'Obtenir un Devis Professionnel',
                cta_services: 'Nos Services',
                feature_1: 'Équipement Certifié',
                feature_2: 'Réponse 24h/24',
                feature_3: 'Solutions Sur Mesure',
                stat_clients: 'Clients Protégés',
                stat_compliance: 'Conformité',
                step_1_title: 'Évaluation des Risques',
                step_1_desc: 'Diagnostic expert des risques d’incendie',
                step_2_title: 'Installation',
                step_2_desc: 'Déploiement d’équipements de précision',
                step_3_title: 'Maintenance',
                step_3_desc: 'Surveillance de fiabilité 24h/24'
            },
            services: {
                title: 'Nos Services',
                subtitle: 'Des solutions complètes de sécurité incendie adaptées pour protéger ce qui vous tient à cœur',
                motto: 'Mieux Vaut Prévenir Que Guérir',
                items: {
                    extinguishers: {
                        title: 'Extincteurs',
                        desc: 'Extincteurs portatifs de haute qualité : poudre (ABC, BC), CO2, eau, mousse et chimique (Classe K).'
                    },
                    alarms: {
                        title: 'Systèmes d’Alarme',
                        desc: 'Détection précoce : fumée, chaleur, flammes, panneaux de contrôle et éclairage de secours.'
                    },
                    suppression: {
                        title: 'Systèmes d’Extinction',
                        desc: 'Sprinklers, mousse, agents propres (FM-200, NOVEC 1230) et systèmes à poudre adaptés.'
                    },
                    maintenance: {
                        title: 'Inspection & Maintenance',
                        desc: 'Inspections régulières, programmes de maintenance et réparation d’urgence 24h/24 conformes ISO/EN.'
                    },
                    ppe: {
                        title: 'Équipements de Protection (EPI)',
                        desc: 'Protection de la tête, des mains, du corps et antichute aux normes OSHA et EN.'
                    },
                    training: {
                        title: 'Formation Sécurité',
                        desc: 'Programmes complets sur la prévention, l’usage des équipements et protocoles d’urgence.'
                    },
                    customization: {
                        title: 'Branding & Personnalisation',
                        desc: 'Services de personnalisation pour EPI (broderie, impression) pour aligner votre identité visuelle.'
                    },
                    specialized: {
                        title: 'Solutions Spécialisées',
                        desc: 'Sécurité adaptée pour le pétrole & gaz, maritime et construction avec exigences spécifiques.'
                    }
                },
                banner_title: 'Personnalisation et Solutions Spécialisées',
                banner_quote: 'LA SÉCURITÉ N’A PAS DE PRIX, USEZ-EN SANS MODÉRATION.',
                banner_text_1: 'Chez Ocean Security, nous comprenons que chaque client a des besoins uniques. Notre approche centrée sur le client garantit des solutions sur mesure.',
                banner_cta: 'Discuter de Vos Besoins'
            },
            about: {
                badge: 'Fournisseur de Confiance',
                title: 'À Propos d’Ocean Security',
                text_1: 'Avec plus de 7 ans d’expérience combinée, Ocean Security est devenu un leader des solutions de sécurité en Tunisie. Notre mission est la protection et la tranquillité.',
                text_2: 'Nous privilégions la sécurité et la conformité. Nos équipements respectent les normes ISO et les codes de l’Office National de la Protection Civile.',
                feature_team: 'Équipe Experte',
                feature_team_desc: 'Professionnels passionnés dédiés à la sécurité',
                feature_leader: 'Leader en Tunisie',
                feature_leader_desc: 'Premier fournisseur de solutions incendie',
                feature_response: 'Réponse 24h/24',
                feature_response_desc: 'Support rapide pour toutes les urgences',
                feature_certified: 'Certifié',
                feature_certified_desc: 'Conforme aux normes OSHA, EN et ISO',
                values_title: 'Nos Valeurs Fondamentales',
                values_desc: 'Sécurité, Intégrité, Excellence et Innovation guident chacune de nos actions.',
                mission: 'Nous Avons Besoin Que Vous Travailliez en Sécurité',
                mission_sub: 'Énoncé de Mission Ocean Security',
                stat_exp: 'Années d’Expérience',
                stat_clients: 'Clients Confiants',
                stat_commitment: 'Engagement'
            },
            portfolio: {
                title: 'Notre',
                title_accent: 'Travail.',
                subtitle: 'Une vitrine de nos installations professionnelles et équipements premium à travers la Tunisie.',
                cat_all: 'Tout',
                cat_equip: 'Équipement',
                cat_install: 'Installation',
                cat_service: 'Service',
                cat_train: 'Formation',
                view_image: 'Voir l’image',
                view_video: 'Voir le cas d’étude'
            },
            team: {
                title: 'Notre Équipe',
                subtitle: 'Nos experts certifiés sont dédiés à fournir le plus haut niveau de protection',
                intro_title: 'Expertise & Professionnalisme',
                intro_text: 'Nos techniciens détiennent des certifications reconnues pour l’installation et la maintenance.'
            },
            partners: {
                badge: 'Réseau d’Excellence',
                title: 'Nos Partenaires de Confiance',
                text: 'Ocean Security est fier de sécuriser les opérations des leaders industriels et commerciaux tunisiens.',
                cta_brand: 'Votre Marque Ici',
                cta_link: 'Soyez Protégé',
                footer: 'Leaders de l’Industrie'
            },
            contact: {
                title: 'Contactez-Nous',
                subtitle: 'Contactez-nous pour discuter de vos besoins ou demander une consultation gratuite',
                info_title: 'Entrer en Contact',
                loc_title: 'Notre Emplacement',
                email_title: 'Email',
                call_title: 'Appelez-Nous',
                hours_title: 'Heures de Travail',
                hours_desc: 'Lun-Ven: 9h00 - 17h00',
                emergency: 'SERVICE D’URGENCE 24h/24 DISPONIBLE',
                hotline: 'Ligne d’Urgence Incendie :',
                form_title: 'Envoyez-nous un Message',
                label_name: 'Nom Complet *',
                label_email: 'Adresse Email *',
                label_phone: 'Numéro de Téléphone',
                label_message: 'Votre Message *',
                place_name: 'Jean Dupont',
                place_email: 'jean@exemple.com',
                place_phone: '+216 -- --- ---',
                place_message: 'Comment pouvons-nous vous aider ?',
                btn_send: 'Envoyer la Demande',
                btn_sending: 'Envoi en cours...',
                success_title: 'Message Envoyé avec Succès !',
                success_desc: 'Merci de nous avoir contactés. Notre équipe vous répondra sous peu.',
                error_title: 'Échec de l’Envoi',
                privacy: 'En cliquant sur envoyer, vous acceptez notre politique de confidentialité.'
            },
            footer: {
                rights: 'Tous droits réservés.',
                emergency: 'Urgence 24h/24',
                dev_by: 'Développé par WAVE VI'
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
