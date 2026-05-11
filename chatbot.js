// FutureXcel Technologies Chatbot
// Lightweight chatbot widget for static HTML websites

(function() {
    'use strict';

    // Chatbot configuration
    const config = {
        botName: 'FutureXcel Assistant',
        welcomeMessage: 'Hello! 👋 I\'m here to help you learn about FutureXcel Technologies. How can I assist you today?',
        position: 'bottom-right', // 'bottom-right' or 'bottom-left'
        primaryColor: '#0066cc',
        secondaryColor: '#f0f0f0',
        quickActions: [
            { text: 'Our Services', action: 'services' },
            { text: 'Training Programs', action: 'training' },
            { text: 'Contact Us', action: 'contact' },
            { text: 'Careers', action: 'careers' }
        ]
    };

    // Knowledge base - questions and responses
    const knowledgeBase = {
        greetings: [
            'Hello! 👋 How can I help you today?',
            'Hi there! 😊 What would you like to know about FutureXcel Technologies?',
            'Hey! I\'m here to help with any questions about our services, training, or company. How can I assist you?',
            'Welcome! 🌟 I\'m your FutureXcel assistant. What can I help you with today?'
        ],
        services: {
            keywords: ['service', 'services', 'what do you do', 'offerings', 'capabilities', 'what services'],
            response: 'FutureXcel offers comprehensive technology services:\n\n' +
                '🔹 **Custom Software Development**\n' +
                '   Web/mobile apps, APIs, enterprise solutions\n\n' +
                '🔹 **IT Consulting & 24/7 Support**\n' +
                '   Strategic guidance and round-the-clock assistance\n\n' +
                '🔹 **Data Engineering & Analytics**\n' +
                '   Pipelines, warehousing, BI, and data governance\n\n' +
                '🔹 **Cloud & DevOps Services**\n' +
                '   CI/CD, IaC, platform engineering, FinOps\n\n' +
                '🔹 **Modern Endpoint Management**\n' +
                '   Device management and security solutions\n\n' +
                '🔹 **IT Help Desk Outsourcing**\n' +
                '   Professional support desk services\n\n' +
                '🔹 **Machine Learning Solutions**\n' +
                '   ML model development and responsible AI\n\n' +
                '🔹 **Research & Development**\n' +
                '   Innovation and technology research\n\n' +
                '🔹 **Training & Placement Programs**\n' +
                '   Hands-on training with job placement support\n\n' +
                'Would you like details about any specific service?'
        },
        software: {
            keywords: ['software', 'software development', 'web app', 'mobile app', 'api', 'application', 'custom software', 'web development', 'app development'],
            response: '**Custom Software Development** 🚀\n\n' +
                'We build scalable, secure software solutions:\n\n' +
                '✅ **Web Applications**\n' +
                '   Modern, responsive web apps with latest frameworks\n\n' +
                '✅ **Mobile Applications**\n' +
                '   iOS and Android native/hybrid apps\n\n' +
                '✅ **API Development**\n' +
                '   RESTful APIs, GraphQL, microservices\n\n' +
                '✅ **Cloud Applications**\n' +
                '   SaaS platforms and serverless solutions\n\n' +
                '✅ **Enterprise Software**\n' +
                '   ERP, CRM, BI tools, workflow automation\n\n' +
                '✅ **Integration Services**\n' +
                '   Seamless system integrations\n\n' +
                'We use modern tech stacks and follow best practices for security, scalability, and maintainability.\n\n' +
                'Visit /services-software or contact us for a consultation!'
        },
        cloud: {
            keywords: ['cloud', 'devops', 'ci/cd', 'infrastructure', 'aws', 'azure', 'gcp', 'terraform', 'kubernetes', 'docker'],
            response: '**Cloud & DevOps Services** ☁️\n\n' +
                'We help teams ship faster and operate securely:\n\n' +
                '✅ **CI/CD Pipelines**\n' +
                '   Automated build, test, and deployment\n\n' +
                '✅ **Infrastructure as Code (IaC)**\n' +
                '   Terraform, CloudFormation, Pulumi\n\n' +
                '✅ **Cloud Platforms**\n' +
                '   AWS, Azure, GCP expertise\n\n' +
                '✅ **Container Orchestration**\n' +
                '   Kubernetes, Docker, containerization\n\n' +
                '✅ **Platform Engineering**\n' +
                '   Developer platforms and golden paths\n\n' +
                '✅ **Observability & Monitoring**\n' +
                '   Logging, metrics, tracing, alerting\n\n' +
                '✅ **Security & Compliance**\n' +
                '   Cloud security best practices\n\n' +
                '✅ **FinOps**\n' +
                '   Cost optimization and cloud spend management\n\n' +
                'Visit /services-cloud to learn more!'
        },
        data: {
            keywords: ['data', 'data engineering', 'data analytics', 'data pipeline', 'data warehouse', 'bi', 'business intelligence', 'data lake', 'etl'],
            response: '**Data Engineering & Analytics** 📊\n\n' +
                'We build robust data infrastructure:\n\n' +
                '✅ **Data Pipelines**\n' +
                '   ETL/ELT, real-time streaming, batch processing\n\n' +
                '✅ **Data Warehousing**\n' +
                '   Snowflake, BigQuery, Redshift solutions\n\n' +
                '✅ **Data Lakehouse**\n' +
                '   Modern lakehouse architectures\n\n' +
                '✅ **Business Intelligence**\n' +
                '   Dashboards, reporting, data visualization\n\n' +
                '✅ **Data Governance**\n' +
                '   Quality, security, compliance, cataloging\n\n' +
                '✅ **Analytics Platforms**\n' +
                '   Self-service analytics and data products\n\n' +
                'We help organizations make data-driven decisions with reliable, scalable data infrastructure.\n\n' +
                'Visit /services-data for more details!'
        },
        ml: {
            keywords: ['machine learning', 'ml', 'ai', 'artificial intelligence', 'model', 'prediction', 'neural network', 'deep learning'],
            response: '**Machine Learning Solutions** 🤖\n\n' +
                'We develop and deploy ML solutions:\n\n' +
                '✅ **Model Development**\n' +
                '   Custom ML models for your use cases\n\n' +
                '✅ **Model Lifecycle Management**\n' +
                '   Training, versioning, deployment, monitoring\n\n' +
                '✅ **Evaluation & Testing**\n' +
                '   Comprehensive model validation\n\n' +
                '✅ **Retrieval-Augmented Generation (RAG)**\n' +
                '   Enhanced AI with knowledge bases\n\n' +
                '✅ **MLOps**\n' +
                '   Automated ML workflows and pipelines\n\n' +
                '✅ **Responsible AI**\n' +
                '   Fairness, explainability, ethics\n\n' +
                '✅ **AI Automation**\n' +
                '   Intelligent process automation\n\n' +
                'We build production-ready ML systems with best practices.\n\n' +
                'Visit /services-ml to explore our ML capabilities!'
        },
        consulting: {
            keywords: ['consulting', 'it consulting', 'support', '24/7', 'managed services', 'it support', 'technical support'],
            response: '**IT Consulting & Support** 💼\n\n' +
                'We provide strategic guidance and ongoing support:\n\n' +
                '✅ **Strategic IT Consulting**\n' +
                '   Technology roadmap and architecture guidance\n\n' +
                '✅ **24/7 IT Support**\n' +
                '   Round-the-clock technical assistance\n\n' +
                '✅ **Managed Services**\n' +
                '   Proactive monitoring and maintenance\n\n' +
                '✅ **Cloud Modernization**\n' +
                '   Legacy system migration and modernization\n\n' +
                '✅ **Security Consulting**\n' +
                '   Security assessments and implementation\n\n' +
                '✅ **Performance Optimization**\n' +
                '   System tuning and efficiency improvements\n\n' +
                '✅ **SLA-Based Support**\n' +
                '   Guaranteed response times and uptime\n\n' +
                'We help teams operate securely with measurable outcomes.\n\n' +
                'Visit /services-consulting for more information!'
        },
        helpdesk: {
            keywords: ['help desk', 'helpdesk', 'support desk', 'ticket', 'it support', 'customer support', 'technical support'],
            response: '**IT Help Desk Outsourcing** 🎧\n\n' +
                'Professional support desk services:\n\n' +
                '✅ **Multi-Channel Support**\n' +
                '   Email, phone, chat, ticketing systems\n\n' +
                '✅ **24/7 Availability**\n' +
                '   Round-the-clock support coverage\n\n' +
                '✅ **Tiered Support**\n' +
                '   L1, L2, L3 escalation paths\n\n' +
                '✅ **Knowledge Base Management**\n' +
                '   Documentation and self-service resources\n\n' +
                '✅ **SLA Compliance**\n' +
                '   Guaranteed response and resolution times\n\n' +
                '✅ **Reporting & Analytics**\n' +
                '   Performance metrics and insights\n\n' +
                'We provide cost-effective, professional help desk services.\n\n' +
                'Visit /services-helpdesk to learn more!'
        },
        endpoint: {
            keywords: ['endpoint', 'device management', 'mdm', 'intune', 'microsoft 365', 'office 365', 'device security'],
            response: '**Modern Endpoint Management** 📱\n\n' +
                'We manage and secure your devices:\n\n' +
                '✅ **Microsoft Intune**\n' +
                '   Cloud-based device and app management\n\n' +
                '✅ **Microsoft 365 Integration**\n' +
                '   Seamless Office 365 and M365 management\n\n' +
                '✅ **Device Enrollment**\n' +
                '   Automated device onboarding\n\n' +
                '✅ **Policy Management**\n' +
                '   Security policies and compliance\n\n' +
                '✅ **Application Deployment**\n' +
                '   Automated app distribution\n\n' +
                '✅ **Security & Compliance**\n' +
                '   Device security and compliance monitoring\n\n' +
                '✅ **Remote Management**\n' +
                '   Centralized device control\n\n' +
                'We help organizations manage devices efficiently and securely.\n\n' +
                'Visit /services-endpoint for details!'
        },
        research: {
            keywords: ['research', 'r&d', 'development', 'innovation', 'prototype', 'proof of concept', 'poc'],
            response: '**Research & Development** 🔬\n\n' +
                'We drive innovation through R&D:\n\n' +
                '✅ **Technology Research**\n' +
                '   Emerging technology evaluation\n\n' +
                '✅ **Proof of Concept (POC)**\n' +
                '   Feasibility studies and prototypes\n\n' +
                '✅ **Innovation Labs**\n' +
                '   Experimental development\n\n' +
                '✅ **Technology Assessment**\n' +
                '   Evaluation of new tools and platforms\n\n' +
                '✅ **Custom Solutions**\n' +
                '   Bespoke technology development\n\n' +
                'We help organizations explore and adopt cutting-edge technologies.\n\n' +
                'Visit /services-research to learn more!'
        },
        training: {
            keywords: ['training', 'course', 'program', 'placement', 'learn', 'cohort', 'education', 'bootcamp', 'certification'],
            response: '**Training & Placement Programs** 📚\n\n' +
                'Hands-on training with placement support:\n\n' +
                '📖 **Software Engineering (Full-Stack)**\n' +
                '   • APIs, front-end frameworks, testing\n' +
                '   • CI/CD, version control, best practices\n' +
                '   • Portfolio-ready projects\n\n' +
                '📖 **Cloud/DevOps & Data Engineering**\n' +
                '   • Infrastructure as Code (IaC)\n' +
                '   • Observability and monitoring\n' +
                '   • Data pipelines and warehousing\n' +
                '   • BI & AI fundamentals\n\n' +
                '**What\'s Included:**\n' +
                '✅ Hands-on projects\n' +
                '✅ Industry mentorship\n' +
                '✅ Mock interviews\n' +
                '✅ Placement support\n' +
                '✅ Career guidance\n\n' +
                'Visit /training or email info@futurexceltech.com to apply!'
        },
        contact: {
            keywords: ['contact', 'email', 'phone', 'reach', 'talk', 'speak', 'address', 'location', 'where are you', 'how to contact'],
            response: '**Contact Information** 📞\n\n' +
                'Here\'s how to reach us:\n\n' +
                '📧 **Email:**\n' +
                '   info@futurexceltech.com\n\n' +
                '📞 **Phone:**\n' +
                '   • +91 862-504-0777 (India)\n' +
                '   • +1 717-749-9910 (USA)\n' +
                '   • +1 217-218-1585 (USA)\n\n' +
                '💬 **WhatsApp:**\n' +
                '   +91 782-286-5734\n\n' +
                '📍 **Address:**\n' +
                '   H.No. 4-10-312, Abdul Kalam Road\n' +
                '   Gali No. 1, Near Bus Stand, Ekbal Nagar\n' +
                '   Purna, Parbhani, Maharashtra - 431511\n' +
                '   India\n\n' +
                '🌐 **Website:**\n' +
                '   www.futurexceltech.com\n\n' +
                'You can also visit /contact for more options and a contact form!'
        },
        careers: {
            keywords: ['job', 'career', 'hiring', 'position', 'vacancy', 'work', 'employment', 'openings', 'opportunities', 'apply'],
            response: '**Career Opportunities** 💼\n\n' +
                'We\'re always looking for talented individuals!\n\n' +
                '**Current Openings:**\n\n' +
                '👨‍💻 **Software Engineer**\n' +
                '   Build APIs & user experiences that scale\n' +
                '   Full-stack development expertise\n\n' +
                '☁️ **Cloud/DevOps Engineer**\n' +
                '   Automate delivery and pave golden paths\n' +
                '   Infrastructure and CI/CD expertise\n\n' +
                '📊 **Data Engineer**\n' +
                '   Pipelines, warehousing, and BI for decisions\n' +
                '   Data infrastructure and analytics\n\n' +
                '**Why Join Us?**\n' +
                '✅ Competitive compensation\n' +
                '✅ Growth opportunities\n' +
                '✅ Collaborative environment\n' +
                '✅ Latest technologies\n\n' +
                'Visit /careers for more details and to apply!'
        },
        pricing: {
            keywords: ['price', 'cost', 'pricing', 'quote', 'how much', 'expensive', 'budget', 'affordable', 'rates', 'fee'],
            response: '**Pricing Information** 💰\n\n' +
                'Our pricing is flexible and tailored to your needs:\n\n' +
                '✅ **Custom Quotes**\n' +
                '   Project-based pricing for all services\n\n' +
                '✅ **Flexible Engagement Models**\n' +
                '   Hourly, project-based, or retainer options\n\n' +
                '✅ **24/7 Support Plans**\n' +
                '   SLA-based support with guaranteed response times\n\n' +
                '✅ **Cost Savings**\n' +
                '   50-70% potential savings vs. in-house teams\n\n' +
                '✅ **Transparent Pricing**\n' +
                '   No hidden fees, clear cost breakdowns\n\n' +
                '**Get a Quote:**\n' +
                'For a detailed quote tailored to your project, please:\n' +
                '• Email: info@futurexceltech.com\n' +
                '• Visit: /contact\n' +
                '• Call: +91 862-504-0777\n\n' +
                'We typically respond within 24 hours!'
        },
        about: {
            keywords: ['about', 'who are you', 'company', 'background', 'story', 'mission', 'values', 'who we are'],
            response: '**About FutureXcel Technologies** 🏢\n\n' +
                'We are a technology services partner specializing in:\n\n' +
                '✅ Custom software development\n' +
                '✅ IT consulting & support\n' +
                '✅ Data engineering & AI\n' +
                '✅ Cloud/DevOps\n' +
                '✅ Training & placement programs\n\n' +
                '**Our Mission:**\n' +
                'We help teams ship faster and operate securely with measurable outcomes.\n\n' +
                '**Our Reach:**\n' +
                'We serve startups and enterprises across:\n' +
                '• United States\n' +
                '• Canada\n' +
                '• India\n\n' +
                '**Our Focus:**\n' +
                'Reliability, security, and great customer experience.\n\n' +
                'Visit /about to learn more about our approach, values, and team!'
        },
        location: {
            keywords: ['location', 'where', 'office', 'headquarters', 'india', 'usa', 'canada', 'based', 'address'],
            response: '**Our Location** 📍\n\n' +
                '**Headquarters:**\n' +
                'H.No. 4-10-312, Abdul Kalam Road\n' +
                'Gali No. 1, Near Bus Stand, Ekbal Nagar\n' +
                'Purna, Parbhani, Maharashtra - 431511\n' +
                'India\n\n' +
                '**We Serve:**\n' +
                '🌎 United States\n' +
                '🌎 Canada\n' +
                '🌎 India\n\n' +
                '**Contact:**\n' +
                '📧 info@futurexceltech.com\n' +
                '📞 +91 862-504-0777 (India)\n' +
                '📞 +1 717-749-9910 (USA)\n' +
                '📞 +1 217-218-1585 (USA)'
        },
        hours: {
            keywords: ['hours', 'working hours', 'business hours', 'when', 'time', 'available', 'open'],
            response: '**Business Hours** 🕐\n\n' +
                '**Support Availability:**\n' +
                '✅ 24/7 IT Support Services\n' +
                '✅ Round-the-clock help desk\n' +
                '✅ Emergency support available\n\n' +
                '**Office Hours (India):**\n' +
                'Monday - Friday: 9:00 AM - 6:00 PM IST\n' +
                'Saturday: 9:00 AM - 1:00 PM IST\n' +
                'Sunday: Closed\n\n' +
                '**Response Times:**\n' +
                '• Email: Within 24 hours\n' +
                '• Support Tickets: Based on SLA\n' +
                '• Emergency: Immediate response\n\n' +
                'For urgent matters, call us or use our 24/7 support channels!'
        },
        technologies: {
            keywords: ['technology', 'tech stack', 'tools', 'technologies', 'languages', 'frameworks', 'platforms', 'stack'],
            response: '**Technologies & Tools** 🛠️\n\n' +
                'We work with modern technology stacks:\n\n' +
                '**Cloud Platforms:**\n' +
                'AWS, Azure, GCP\n\n' +
                '**DevOps Tools:**\n' +
                'Docker, Kubernetes, Terraform, CI/CD pipelines\n\n' +
                '**Programming Languages:**\n' +
                'Python, JavaScript, TypeScript, Java, C#, Go\n\n' +
                '**Frameworks:**\n' +
                'React, Angular, Vue, Node.js, .NET, Spring\n\n' +
                '**Data & ML:**\n' +
                'Snowflake, BigQuery, Spark, TensorFlow, PyTorch\n\n' +
                '**Microsoft 365:**\n' +
                'Intune, Azure AD, Office 365, Teams\n\n' +
                'We stay current with the latest technologies and best practices!'
        },
        default: [
            'I\'m not sure I understand that question. Could you rephrase it or ask about our services, training, contact info, or careers?',
            'That\'s a great question! For detailed information, I recommend contacting our team directly at info@futurexceltech.com or visiting our website.',
            'I\'m still learning! For specific information, please visit our website or contact us at info@futurexceltech.com. I can help with questions about services, training, careers, or contact information!'
        ]
    };

    // Chatbot HTML structure
    function createChatbotHTML() {
        const quickActionsHTML = config.quickActions.map(action => 
            `<button class="chatbot-quick-action" data-action="${action.action}">${action.text}</button>`
        ).join('');
        
        const chatbotHTML = `
            <div id="futurexcel-chatbot-container">
                <div id="futurexcel-chatbot-header">
                    <div class="chatbot-header-info">
                        <div class="chatbot-avatar">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                        </div>
                        <div class="chatbot-header-text">
                            <h3>${config.botName}</h3>
                            <span class="chatbot-status">
                                <span class="status-dot"></span>
                                Online
                            </span>
                        </div>
                    </div>
                    <button id="futurexcel-chatbot-close" aria-label="Close chatbot">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div id="futurexcel-chatbot-messages"></div>
                <div id="futurexcel-chatbot-quick-actions" class="chatbot-quick-actions">
                    ${quickActionsHTML}
                </div>
                <div id="futurexcel-chatbot-input-container">
                    <input 
                        type="text" 
                        id="futurexcel-chatbot-input" 
                        placeholder="Type your message..." 
                        autocomplete="off"
                    />
                    <button id="futurexcel-chatbot-send" aria-label="Send message">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </div>
            <button id="futurexcel-chatbot-toggle" aria-label="Open chatbot" class="chatbot-toggle-pulse">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span class="chatbot-notification-badge"></span>
            </button>
        `;
        
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    // Initialize chatbot
    function initChatbot() {
        createChatbotHTML();
        
        const container = document.getElementById('futurexcel-chatbot-container');
        const toggle = document.getElementById('futurexcel-chatbot-toggle');
        const close = document.getElementById('futurexcel-chatbot-close');
        const input = document.getElementById('futurexcel-chatbot-input');
        const send = document.getElementById('futurexcel-chatbot-send');
        const messages = document.getElementById('futurexcel-chatbot-messages');

        // Show welcome message
        setTimeout(() => {
            addMessage(config.welcomeMessage, 'bot');
            showQuickActions();
        }, 300);

        // Toggle chatbot
        toggle.addEventListener('click', () => {
            container.classList.add('active');
            toggle.classList.add('hidden');
            input.focus();
        });

        close.addEventListener('click', () => {
            container.classList.remove('active');
            toggle.classList.remove('hidden');
        });

        // Send message on button click
        send.addEventListener('click', handleSendMessage);

        // Send message on Enter key
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
            }
        });

        function handleSendMessage() {
            const userMessage = input.value.trim();
            if (!userMessage) return;

            addMessage(userMessage, 'user');
            input.value = '';
            hideQuickActions();
            
            // Show typing indicator
            const typingId = showTypingIndicator();
            
            // Get bot response after a short delay
            setTimeout(() => {
                removeTypingIndicator(typingId);
                const response = getBotResponse(userMessage);
                addMessage(response, 'bot');
                // Show quick actions after response
                setTimeout(() => showQuickActions(), 300);
            }, 500 + Math.random() * 500); // Simulate typing delay
        }
        
        // Handle quick action clicks
        document.querySelectorAll('.chatbot-quick-action').forEach(button => {
            button.addEventListener('click', () => {
                const action = button.getAttribute('data-action');
                const actionText = button.textContent;
                addMessage(actionText, 'user');
                hideQuickActions();
                
                const typingId = showTypingIndicator();
                setTimeout(() => {
                    removeTypingIndicator(typingId);
                    const response = getBotResponse(action);
                    addMessage(response, 'bot');
                    setTimeout(() => showQuickActions(), 300);
                }, 500);
            });
        });
        
        function showQuickActions() {
            const quickActions = document.getElementById('futurexcel-chatbot-quick-actions');
            if (quickActions) {
                quickActions.style.display = 'flex';
                setTimeout(() => quickActions.classList.add('visible'), 10);
            }
        }
        
        function hideQuickActions() {
            const quickActions = document.getElementById('futurexcel-chatbot-quick-actions');
            if (quickActions) {
                quickActions.classList.remove('visible');
                setTimeout(() => quickActions.style.display = 'none', 300);
            }
        }

        function formatMessage(text) {
            // Escape HTML first to prevent XSS
            let formatted = text
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
            
            // Convert markdown bold **text** to <strong>
            formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            
            // Split by line breaks to process each line
            const lines = formatted.split('\n');
            const processedLines = [];
            
            for (let i = 0; i < lines.length; i++) {
                let line = lines[i];
                
                // Handle lines with checkmarks or bullets at the start
                if (line.match(/^(\s*)([✅🔹📚💼💰📧📞💬📍🌐👨‍💻☁️📊]|•|-)\s+/)) {
                    // Keep emoji and formatting, just ensure proper spacing
                    processedLines.push(line);
                } else if (line.trim() === '') {
                    // Empty lines become spacing
                    processedLines.push('');
                } else {
                    // Regular lines
                    processedLines.push(line);
                }
            }
            
            // Join with <br> tags
            formatted = processedLines.join('<br>');
            
            return formatted;
        }
        
        function addMessage(text, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `chatbot-message chatbot-message-${sender}`;
            
            const messageContent = document.createElement('div');
            messageContent.className = 'chatbot-message-content';
            
            // Format the message with markdown support
            messageContent.innerHTML = formatMessage(text);
            
            messageDiv.appendChild(messageContent);
            messages.appendChild(messageDiv);
            
            // Scroll to bottom
            messages.scrollTop = messages.scrollHeight;
        }

        function showTypingIndicator() {
            const typingDiv = document.createElement('div');
            typingDiv.className = 'chatbot-message chatbot-message-bot chatbot-typing';
            typingDiv.id = 'typing-indicator';
            typingDiv.innerHTML = `
                <div class="chatbot-message-content">
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                </div>
            `;
            messages.appendChild(typingDiv);
            messages.scrollTop = messages.scrollHeight;
            return 'typing-indicator';
        }

        function removeTypingIndicator(id) {
            const typing = document.getElementById(id);
            if (typing) typing.remove();
        }

        function getBotResponse(userMessage) {
            const lowerMessage = userMessage.toLowerCase().trim();
            
            // Check for greetings
            if (lowerMessage.match(/\b(hi|hello|hey|greetings|good morning|good afternoon|good evening|hi there|hey there)\b/)) {
                return knowledgeBase.greetings[Math.floor(Math.random() * knowledgeBase.greetings.length)];
            }
            
            // Check for thanks/gratitude
            if (lowerMessage.match(/\b(thanks|thank you|thank|appreciate|grateful)\b/)) {
                return 'You\'re welcome! 😊 Is there anything else I can help you with?';
            }
            
            // Check for goodbye
            if (lowerMessage.match(/\b(bye|goodbye|see you|farewell|exit|close)\b/)) {
                return 'Thank you for chatting! 👋 Feel free to come back anytime if you have more questions. Have a great day!';
            }

            // Check knowledge base - improved matching
            let bestMatch = null;
            let bestMatchScore = 0;
            
            for (const [key, data] of Object.entries(knowledgeBase)) {
                if (key === 'greetings' || key === 'default') continue;
                
                if (data.keywords) {
                    // Calculate match score based on keyword matches
                    const matchCount = data.keywords.filter(keyword => lowerMessage.includes(keyword)).length;
                    if (matchCount > 0 && matchCount > bestMatchScore) {
                        bestMatchScore = matchCount;
                        bestMatch = data.response;
                    }
                }
            }
            
            if (bestMatch) {
                return bestMatch;
            }

            // Default response
            return knowledgeBase.default[Math.floor(Math.random() * knowledgeBase.default.length)];
        }
    }

    // Load CSS
    function loadCSS() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'chatbot.css';
        document.head.appendChild(link);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            loadCSS();
            initChatbot();
        });
    } else {
        loadCSS();
        initChatbot();
    }

    // Expose configuration for customization
    window.FutureXcelChatbot = {
        config: config,
        knowledgeBase: knowledgeBase
    };

})();

