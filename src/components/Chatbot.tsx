<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Niiishitech - Technology Solutions</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #1a56db;
            --secondary: #0e3a9e;
            --accent: #3b82f6;
            --light: #f1f5f9;
            --dark: #1e293b;
            --text: #374151;
            --gray: #6b7280;
            --blue-light: #dbeafe;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            color: var(--text);
            line-height: 1.6;
            background-color: #f9fafb;
        }
        
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header Styles */
        header {
            background-color: white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
        }
        
        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
        }
        
        .logo {
            font-size: 24px;
            font-weight: 700;
            color: var(--primary);
        }
        
        .nav-menu {
            display: flex;
            list-style: none;
        }
        
        .nav-menu li {
            margin-left: 30px;
        }
        
        .nav-menu a {
            text-decoration: none;
            color: var(--dark);
            font-weight: 500;
            transition: color 0.3s;
        }
        
        .nav-menu a:hover {
            color: var(--primary);
        }
        
        .mobile-menu-btn {
            display: none;
            font-size: 24px;
            background: none;
            border: none;
            cursor: pointer;
            color: var(--dark);
        }
        
        /* Hero Section */
        .hero {
            padding: 150px 0 100px;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            text-align: center;
        }
        
        .hero h1 {
            font-size: 3rem;
            margin-bottom: 20px;
        }
        
        .hero p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto 30px;
        }
        
        .btn {
            display: inline-block;
            padding: 12px 30px;
            background-color: white;
            color: var(--primary);
            border: none;
            border-radius: 5px;
            font-weight: 600;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .btn:hover {
            background-color: var(--light);
            transform: translateY(-2px);
        }
        
        .btn-outline {
            background-color: transparent;
            border: 2px solid white;
            color: white;
            margin-left: 15px;
        }
        
        .btn-outline:hover {
            background-color: white;
            color: var(--primary);
        }
        
        /* Services Section */
        .section-title {
            text-align: center;
            margin-bottom: 50px;
            padding-top: 80px;
        }
        
        .section-title h2 {
            font-size: 2.5rem;
            color: var(--dark);
            margin-bottom: 15px;
        }
        
        .section-title p {
            color: var(--text);
            max-width: 700px;
            margin: 0 auto;
        }
        
        .services {
            padding: 80px 0;
            background-color: white;
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        
        .service-card {
            background-color: var(--light);
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s, box-shadow 0.3s;
            border-top: 4px solid var(--primary);
        }
        
        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .service-icon {
            font-size: 40px;
            color: var(--primary);
            margin-bottom: 20px;
        }
        
        .service-card h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: var(--dark);
        }
        
        .service-card ul {
            list-style: none;
            margin: 20px 0;
        }
        
        .service-card ul li {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
        }
        
        .service-card ul li:before {
            content: ">";
            margin-right: 10px;
            color: var(--primary);
            font-weight: bold;
        }
        
        .price {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--primary);
            margin: 20px 0;
        }
        
        /* About Section */
        .about {
            padding: 80px 0;
            background-color: var(--blue-light);
        }
        
        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            align-items: center;
        }
        
        .about-text h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: var(--dark);
        }
        
        .features {
            margin: 30px 0;
        }
        
        .feature-item {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            background: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        
        .feature-icon {
            width: 24px;
            height: 24px;
            margin-right: 15px;
            color: var(--primary);
        }
        
        /* Why Choose Us */
        .why-choose {
            padding: 80px 0;
            background-color: white;
        }
        
        .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        
        .benefit-card {
            text-align: center;
            padding: 30px;
            border: 1px solid #e5e7eb;
            border-radius: 10px;
            transition: all 0.3s;
        }
        
        .benefit-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        .benefit-icon {
            font-size: 40px;
            color: var(--primary);
            margin-bottom: 20px;
        }
        
        .benefit-card h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: var(--dark);
        }
        
        /* Contact Section */
        .contact {
            padding: 80px 0;
            background: linear-gradient(to right, var(--blue-light) 50%, white 50%);
        }
        
        .contact-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
        }
        
        .contact-info {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        
        .contact-info h3 {
            font-size: 1.8rem;
            margin-bottom: 20px;
            color: var(--dark);
        }
        
        .contact-details {
            margin: 30px 0;
        }
        
        .contact-details p {
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        
        .contact-details i {
            margin-right: 15px;
            color: var(--primary);
            width: 20px;
        }
        
        .business-hours {
            margin-top: 30px;
        }
        
        .business-hours h4 {
            margin-bottom: 15px;
            color: var(--dark);
        }
        
        .business-hours p {
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;
        }
        
        .business-hours .hours {
            color: var(--primary);
            font-weight: 500;
        }
        
        .contact-form {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
        }
        
        .form-group textarea {
            min-height: 120px;
            resize: vertical;
        }
        
        .char-count {
            text-align: right;
            font-size: 14px;
            color: #666;
            margin-top: 5px;
        }
        
        /* Footer */
        footer {
            background-color: var(--dark);
            color: white;
            padding: 60px 0 30px;
        }
        
        .footer-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
        }
        
        .footer-col h4 {
            font-size: 1.2rem;
            margin-bottom: 20px;
            color: white;
        }
        
        .footer-col ul {
            list-style: none;
        }
        
        .footer-col ul li {
            margin-bottom: 10px;
        }
        
        .footer-col a {
            color: #ddd;
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .footer-col a:hover {
            color: white;
        }
        
        .copyright {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #4b5563;
            color: #ddd;
        }
        
        /* Chatbot */
        .chatbot-container {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 1000;
        }
        
        .chatbot-btn {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: var(--primary);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            border: none;
            font-size: 24px;
        }
        
        .chatbot-window {
            position: absolute;
            bottom: 70px;
            right: 0;
            width: 350px;
            height: 450px;
            background-color: white;
            border-radius: 15px;
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
            display: none;
            flex-direction: column;
            overflow: hidden;
        }
        
        .chatbot-header {
            background-color: var(--primary);
            color: white;
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .chatbot-messages {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
        }
        
        .message {
            margin-bottom: 15px;
            display: flex;
        }
        
        .bot-message {
            justify-content: flex-start;
        }
        
        .user-message {
            justify-content: flex-end;
        }
        
        .message-content {
            max-width: 70%;
            padding: 10px 15px;
            border-radius: 18px;
        }
        
        .bot-message .message-content {
            background-color: #f1f1f1;
            border-top-left-radius: 5px;
        }
        
        .user-message .message-content {
            background-color: var(--primary);
            color: white;
            border-top-right-radius: 5px;
        }
        
        .chatbot-input {
            display: flex;
            padding: 15px;
            border-top: 1px solid #eee;
        }
        
        .chatbot-input input {
            flex: 1;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 30px;
            margin-right: 10px;
        }
        
        .chatbot-input button {
            background-color: var(--primary);
            color: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            cursor: pointer;
        }
        
        /* Checkbox styling from images */
        .check-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
        }
        
        .check-icon {
            margin-right: 15px;
            color: var(--primary);
            font-size: 24px;
        }
        
        /* Responsive Styles */
        @media (max-width: 992px) {
            .about-content,
            .contact-container {
                grid-template-columns: 1fr;
            }
            
            .contact {
                background: var(--blue-light);
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
        }
        
        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                top: 70px;
                left: -100%;
                width: 100%;
                height: calc(100vh - 70px);
                background-color: white;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                transition: left 0.3s;
            }
            
            .nav-menu.active {
                left: 0;
            }
            
            .nav-menu li {
                margin: 20px 0;
            }
            
            .mobile-menu-btn {
                display: block;
            }
            
            .hero {
                padding: 130px 0 80px;
            }
            
            .hero h1 {
                font-size: 2rem;
            }
            
            .btn-outline {
                margin-left: 0;
                margin-top: 15px;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container header-container">
            <div class="logo">niiishitech</div>
            <button class="mobile-menu-btn">
                <i class="fas fa-bars"></i>
            </button>
            <ul class="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="container">
            <h1>Technology Solutions That Transform</h1>
            <p>Our team of experienced professionals combines deep technical expertise with a commitment to excellence.</p>
            <div>
                <a href="#services" class="btn">Our Services</a>
                <a href="#contact" class="btn btn-outline">Get In Touch</a>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
        <div class="container">
            <div class="section-title">
                <h2>Our Services</h2>
                <p>Comprehensive technology solutions designed to drive your business forward</p>
            </div>
            
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Cybersecurity Services</h3>
                    <p>Comprehensive security solutions to protect your digital assets</p>
                    <ul>
                        <li>Penetration Testing</li>
                        <li>Security Audits</li>
                        <li>Incident Response</li>
                        <li>Compliance Management</li>
                    </ul>
                    <div class="price">Starting from $2,999/month</div>
                    <a href="#contact" class="btn">Learn More</a>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3>Application Development</h3>
                    <p>Custom software solutions tailored to your business needs</p>
                    <ul>
                        <li>Web Applications</li>
                        <li>Mobile Apps</li>
                        <li>API Development</li>
                        <li>Cloud Integration</li>
                    </ul>
                    <div class="price">Starting from $15,000/project</div>
                    <a href="#contact" class="btn">Learn More</a>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-sync-alt"></i>
                    </div>
                    <h3>Subscription Services</h3>
                    <p>Ongoing tech support and maintenance packages</p>
                    <ul>
                        <li>24/7 Support</li>
                        <li>Regular Updates</li>
                        <li>Performance Monitoring</li>
                        <li>Backup Solutions</li>
                    </ul>
                    <div class="price">Starting from $499/month</div>
                    <a href="#contact" class="btn">Learn More</a>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-wifi"></i>
                    </div>
                    <h3>IoT Solutions</h3>
                    <p>Internet of Things integration for smart business operations</p>
                    <ul>
                        <li>Smart Device Integration</li>
                        <li>Sensor Networks</li>
                        <li>Data Analytics</li>
                        <li>Remote Monitoring</li>
                    </ul>
                    <div class="price">Starting from $3,500/project</div>
                    <a href="#contact" class="btn">Learn More</a>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
        <div class="container">
            <div class="section-title">
                <h2>About niiishitech</h2>
            </div>
            
            <div class="about-content">
                <div class="about-text">
                    <p>At Niiishitech, we're passionate about delivering innovative technology solutions that transform businesses. Our team of experienced professionals combines deep technical expertise with a commitment to excellence.</p>
                    <p>Founded with the vision of making advanced technology accessible to businesses of all sizes, we specialize in cybersecurity, application development, IoT solutions, and ongoing tech support services.</p>
                    
                    <div class="features">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <div>Industry-leading security practices</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <div>Cutting-edge development methodologies</div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <div>Dedicated customer support team</div>
                        </div>
                    </div>
                </div>
                
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Team" style="width: 100%; border-radius: 10px;">
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose">
        <div class="container">
            <div class="section-title">
                <h2>Why Choose Us?</h2>
            </div>
            
            <div class="benefits-grid">
                <div class="benefit-card">
                    <div class="benefit-icon">
                        <i class="fas fa-trophy"></i>
                    </div>
                    <h3>Proven Excellence</h3>
                    <p>Recognized industry expertise with award-winning solutions</p>
                </div>
                
                <div class="benefit-card">
                    <div class="benefit-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <h3>24/7 Support</h3>
                    <p>Round-the-clock assistance whenever you need it</p>
                </div>
                
                <div class="benefit-card">
                    <div class="benefit-icon">
                        <i class="fas fa-smile"></i>
                    </div>
                    <h3>Client Satisfaction</h3>
                    <p>4.9/5 client rating with 500+ successful projects</p>
                </div>
            </div>
            
            <!-- Check items from the image -->
            <div style="margin-top: 50px;">
                <div class="check-item">
                    <div class="check-icon">
                        <i class="far fa-check-circle"></i>
                    </div>
                    <div>
                        <h3>Proven Excellence</h3>
                        <p>Recognized industry expertise with award-winning solutions</p>
                    </div>
                </div>
                
                <div class="check-item">
                    <div class="check-icon">
                        <i class="far fa-check-circle"></i>
                    </div>
                    <div>
                        <h3>24/7 Support</h3>
                        <p>Round-the-clock assistance whenever you need it</p>
                    </div>
                </div>
                
                <div class="check-item">
                    <div class="check-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div>
                        <h3>Client Satisfaction</h3>
                        <p>4.9/5 client rating with 500+ successful projects</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
        <div class="container">
            <div class="section-title">
                <h2>Get In Touch</h2>
                <p>Ready to transform your business? Let's discuss your project.</p>
            </div>
            
            <div class="contact-container">
                <div class="contact-info">
                    <h3>Contact Information</h3>
                    
                    <div class="contact-details">
                        <p><i class="fas fa-phone"></i> +91 7589432897</p>
                        <p><i class="fas fa-envelope"></i> hello@niiishitech.com</p>
                        <p><i class="fas fa-map-marker-alt"></i> 123 Fraser Road, Patna, Bihar</p>
                    </div>
                    
                    <div class="business-hours">
                        <h4>Business Hours</h4>
                        <p><span>Monday - Friday:</span> <span class="hours">9:00 AM - 6:00 PM PST</span></p>
                        <p><span>Saturday:</span> <span class="hours">10:00 AM - 4:00 PM PST</span></p>
                        <p><span>Sunday:</span> <span class="hours">Emergency Support Only</span></p>
                    </div>
                </div>
                
                <div class="contact-form">
                    <form id="contactForm">
                        <div class="form-group">
                            <label for="name">Full Name *</label>
                            <input type="text" id="name" required placeholder="John Abram">
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" required placeholder="johnabram@example.com">
                        </div>
                        
                        <div class="form-group">
                            <label for="phone">Phone Number *</label>
                            <input type="tel" id="phone" required placeholder="+91 7594280567">
                        </div>
                        
                        <div class="form-group">
                            <label for="service">Service Interested In *</label>
                            <select id="service" required>
                                <option value="">Select a service</option>
                                <option value="cybersecurity">Cybersecurity Services</option>
                                <option value="appdev">Application Development</option>
                                <option value="subscription">Subscription Services</option>
                                <option value="iot">IoT Solutions</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="message">Message *</label>
                            <textarea id="message" required placeholder="Tell us about your project or ask any questions..."></textarea>
                            <div class="char-count"><span id="charCount">0</span>/500 characters</div>
                        </div>
                        
                        <button type="submit" class="btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-container">
                <div class="footer-col">
                    <h4>niiishitech</h4>
                    <p>Empowering businesses with innovative technology solutions. Your success is our mission.</p>
                </div>
                
                <div class="footer-col">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#services">Cybersecurity</a></li>
                        <li><a href="#services">App Development</a></li>
                        <li><a href="#services">Subscription Services</a></li>
                        <li><a href="#services">IoT Solutions</a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h4>Connect</h4>
                    <ul>
                        <li><a href="#"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
                        <li><a href="#"><i class="fab fa-facebook"></i> Facebook</a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2025 Niiishitech. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Chatbot -->
    <div class="chatbot-container">
        <button class="chatbot-btn">
            <i class="fas fa-comment-dots"></i>
        </button>
        
        <div class="chatbot-window">
            <div class="chatbot-header">
                <h3>Niiishitech Assistant</h3>
                <button id="close-chatbot">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="chatbot-messages">
                <div class="message bot-message">
                    <div class="message-content">
                        Hello! How can I help you today?
                    </div>
                </div>
            </div>
            
            <div class="chatbot-input">
                <input type="text" placeholder="Type your message...">
                <button><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    </div>

    <script>
        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navMenu = document.querySelector('.nav-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
        
        // Contact Form Character Count
        const messageTextarea = document.getElementById('message');
        const charCount = document.getElementById('charCount');
        
        messageTextarea.addEventListener('input', () => {
            charCount.textContent = messageTextarea.value.length;
        });
        
        // Form Submission
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert(`Thank you for your message, ${name}! We will contact you soon at ${email} or ${phone} regarding our ${service} services.`);
            
            // Reset form
            contactForm.reset();
            charCount.textContent = '0';
        });
        
        // Chatbot functionality
        const chatbotBtn = document.querySelector('.chatbot-btn');
        const chatbotWindow = document.querySelector('.chatbot-window');
        const closeChatbot = document.getElementById('close-chatbot');
        const chatInput = document.querySelector('.chatbot-input input');
        const chatSendBtn = document.querySelector('.chatbot-input button');
        const chatMessages = document.querySelector('.chatbot-messages');
        
        chatbotBtn.addEventListener('click', () => {
            chatbotWindow.style.display = 'flex';
        });
        
        closeChatbot.addEventListener('click', () => {
            chatbotWindow.style.display = 'none';
        });
        
        // Predefined responses
        const responses = {
            'hello': 'Hello! How can I help you with Niiishitech services today?',
            'hi': 'Hi there! How can I assist you?',
            'services': 'We offer Cybersecurity, Application Development, Subscription Services, and IoT Solutions. Which one are you interested in?',
            'cybersecurity': 'Our cybersecurity services include Penetration Testing, Security Audits, Incident Response, and Compliance Management. Would you like to know more about any of these?',
            'application development': 'We develop custom web applications, mobile apps, APIs, and cloud integration solutions. What type of application do you need?',
            'subscription': 'Our subscription services provide 24/7 support, regular updates, performance monitoring, and backup solutions. Would you like to know about our pricing?',
            'iot': 'Our IoT solutions include smart device integration, sensor networks, data analytics, and remote monitoring. What specific IoT needs does your business have?',
            'contact': 'You can reach us at +91 7589432897 or hello@niiishitech.com. Our office is at 123 Fraser Road, Patna, Bihar.',
            'price': 'Cybersecurity starts at $2,999/month, Application Development from $15,000/project, Subscription Services from $499/month, and IoT Solutions from $3,500/project. Would you like a custom quote?',
            'thanks': 'You\'re welcome! Is there anything else I can help with?',
            'default': 'I\'m sorry, I didn\'t understand that. Could you please rephrase? You can ask me about our services, pricing, or how to contact us.'
        };
        
        function addMessage(message, isUser = false) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
            
            const messageContent = document.createElement('div');
            messageContent.classList.add('message-content');
            messageContent.textContent = message;
            
            messageDiv.appendChild(messageContent);
            chatMessages.appendChild(messageDiv);
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        
        function getResponse(input) {
            input = input.toLowerCase();
            
            for (const keyword in responses) {
                if (input.includes(keyword)) {
                    return responses[keyword];
                }
            }
            
            return responses['default'];
        }
        
        chatSendBtn.addEventListener('click', () => {
            const message = chatInput.value.trim();
            
            if (message) {
                addMessage(message, true);
                chatInput.value = '';
                
                // Simulate typing delay
                setTimeout(() => {
                    const response = getResponse(message);
                    addMessage(response);
                }, 1000);
            }
        });
        
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                chatSendBtn.click();
            }
        });
    </script>
</body>
</html>
