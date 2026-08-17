from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER

def create_resume_pdf():
    doc = SimpleDocTemplate("public/resume.pdf", pagesize=letter, rightMargin=72, leftMargin=72, topMargin=72, bottomMargin=18)
    styles = getSampleStyleSheet()
    
    # Custom Styles
    title_style = ParagraphStyle('Title', parent=styles['Heading1'], alignment=TA_CENTER, fontSize=16, spaceAfter=6)
    contact_style = ParagraphStyle('Contact', parent=styles['Normal'], alignment=TA_CENTER, fontSize=10, spaceAfter=12)
    heading_style = ParagraphStyle('Heading', parent=styles['Heading2'], fontSize=12, spaceAfter=6, spaceBefore=12, borderPadding=4)
    normal_style = styles['Normal']
    
    Story = []
    
    # Header
    Story.append(Paragraph("<b>SACHIN KUMAR</b>", title_style))
    Story.append(Paragraph("Agra Road, Jaipur, Rajasthan | +91-7733866682", contact_style))
    Story.append(Paragraph("sachinsisodiya005@gmail.com | linkedin.com/in/sachin-kumar-sisodiya | github.com/Sachinkumarsisodiya", contact_style))
    Story.append(Spacer(1, 12))
    
    # Sections
    sections = [
        ("Professional Summary", "Full-Stack Python Developer with hands-on experience in building responsive web applications using HTML, CSS, JavaScript, and Python with SQL databases. Experienced in AI-assisted development using AI agents and LLM-based tools to build and improve websites and applications. Experienced in deploying live projects using GitHub and Vercel. Strong problem-solving skills with a passion for building clean, functional, and user-friendly web solutions."),
        ("Technical Skills", "<b>Front-End:</b> HTML5, CSS3, Bootstrap, jQuery<br/><b>Programming:</b> JavaScript, Python<br/><b>Database:</b> SQL, MySQL<br/><b>AI Development:</b> AI Agents, LLMs, AI-Assisted Development, Prompt Engineering, Intelligent Automation<br/><b>AI Development Tools:</b> Antigravity IDE, Lovable, Claude, GitHub Copilot, Codex, V0, ChatGPT<br/><b>Tools & Platforms:</b> Git, GitHub, VS Code, Vercel, Replit, Shopify"),
        ("Work Experience", "<b>Full Stack Web Developer</b><br/>Sabai Innovations Pvt. Ltd. | Jaipur, Rajasthan (Sep 2025 - Jul 2026)<br/>• Developed, tested, deployed, hosted, and maintained web applications and websites.<br/>• Developed and customized Shopify stores and themes, including feature enhancements and bug fixing.<br/>• Integrated APIs and handled website deployment, hosting, and ongoing technical support.<br/>• Collaborated with the development team to deliver solutions aligned with business and client requirements."),
        ("Projects", "<b>BINANCE FUTURES TESTNET TRADING BOT— Python</b><br/>• Built a modular CLI-based trading bot to place MARKET and LIMIT orders on Binance Futures Testnet using Python.<br/>• Developed automated trade execution logic using Binance Futures API for real-time order execution.<br/>• Successfully tested real-time order execution in a Testnet environment.<br/><br/><b>WOKL MUSIC STUDIO — React + Tailwind</b><br/>• Built a responsive multi-page React website using component-based architecture and client-side routing.<br/>• Integrated WhatsApp CTA for direct user engagement, improving conversion touchpoints.<br/>• Managed full GitHub workflow and resolved Vercel deployment issues for continuous live hosting.<br/><br/><b>SISODIYA HEALTHCARE CLINIC — Appointment Booking Website</b><br/>• Developed a fully responsive clinic website with an online appointment booking system.<br/>• Built a custom specialties carousel and integrated WhatsApp communication for patient queries.<br/>• Deployed and maintained on GitHub + Vercel with continuous live update workflow.<br/><br/><b>STUDENT MARKSHEET MANAGEMENT SYSTEM — JavaScript</b><br/>• Built a dynamic system to manage student records and calculate grades automatically.<br/>• Implemented real-time DOM manipulation with input validation for error-free data entry.<br/>• Designed an interactive UI for efficient and intuitive student data management.<br/><br/><b>SHOPIFY DEVELOPMENT — Shopify Apps & Themes</b><br/>• Developed TestiCraft and FreeShip Pro both successfully approved on the Shopify App Store.<br/>• Built a premium Shopify Online Store 2.0 theme RIYAH using AI-assisted development.<br/>• Managed Shopify stores, including product listings, collections, navigation, and theme customization."),
        ("Education", "<b>UNIVERSITY OF RAJASTHAN</b> | JAIPUR, RAJASTHAN<br/>Master of Commerce (Business Administration) (2020 - 2022)<br/><br/><b>UNIVERSITY OF RAJASTHAN</b> | JAIPUR, RAJASTHAN<br/>Bachelor of Commerce (2017 - 2020)<br/><br/><b>RAJASTHAN BOARD OF SECONDARY EDUCATION, AJMER</b> | JAIPUR, RAJASTHAN<br/>Senior Secondary (Class XII) (2017)"),
        ("Certifications", "<b>Full-Stack Web Development</b> — Intuit Computer Classes, Jaipur | 1 Year Course")
    ]
    
    for heading, content in sections:
        Story.append(Paragraph(f"<b><u>{heading}</u></b>", heading_style))
        Story.append(Paragraph(content, normal_style))
        Story.append(Spacer(1, 12))
        
    doc.build(Story)

if __name__ == '__main__':
    create_resume_pdf()
