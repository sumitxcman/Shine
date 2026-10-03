import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT

pdf_path = r"c:\Users\pc\Downloads\Blue Shine\Rohini_Jewellery_Showrooms_List.pdf"

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    rightMargin=36,
    leftMargin=36,
    topMargin=36,
    bottomMargin=36
)

styles = getSampleStyleSheet()

title_style = ParagraphStyle(
    'DocTitle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=18,
    leading=22,
    textColor=colors.HexColor('#0F172A'),
    alignment=TA_CENTER
)

subtitle_style = ParagraphStyle(
    'DocSubTitle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=10,
    leading=14,
    textColor=colors.HexColor('#475569'),
    alignment=TA_CENTER
)

cell_header_style = ParagraphStyle(
    'CellHeader',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=9,
    leading=12,
    textColor=colors.white,
    alignment=TA_CENTER
)

cell_title_style = ParagraphStyle(
    'CellTitle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=9,
    leading=12,
    textColor=colors.HexColor('#0F172A')
)

cell_text_style = ParagraphStyle(
    'CellText',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=11.5,
    textColor=colors.HexColor('#334155')
)

rating_style = ParagraphStyle(
    'RatingStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=8.5,
    leading=11.5,
    textColor=colors.HexColor('#D97706')
)

status_style = ParagraphStyle(
    'StatusStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=8,
    leading=11,
    textColor=colors.HexColor('#DC2626')
)

elements = []

elements.append(Paragraph("ROHINI (DELHI) TOP JEWELLERY SHOWROOMS", title_style))
elements.append(Spacer(1, 4))
elements.append(Paragraph("Verified Client Leads & Market Research — Showrooms Without Dedicated Website", subtitle_style))
elements.append(Spacer(1, 12))
elements.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#CBD5E1'), spaceAfter=14))

headers = [
    Paragraph("S.No", cell_header_style),
    Paragraph("Showroom Name", cell_header_style),
    Paragraph("Location / Address", cell_header_style),
    Paragraph("WhatsApp / Contact", cell_header_style),
    Paragraph("Customer Rating", cell_header_style),
    Paragraph("Website Status", cell_header_style),
]

data = [headers]

clients = [
    (
        "1",
        "Kapil Jewellers Pvt Ltd",
        "F-24/35-36, Sector 6 & 7 Dividing Road, Near Rohini West Metro, Rohini, Delhi",
        "+91 99998 89969",
        "5.0 ★ (5,300+ Reviews)",
        "NO WEBSITE\n(WhatsApp & Store Only)"
    ),
    (
        "2",
        "Roop Jewellers",
        "B-5/32, Dividing Road Sector 7 & 8, Rohini, Delhi",
        "+91 79998 35555\n011-47079031",
        "4.8 ★ (WeddingWire)\n3.9 ★ (Local)",
        "NO WEBSITE\n(Bridal Walk-in Only)"
    ),
    (
        "3",
        "Kamal Mahalaxmi Jewellers",
        "S-22, Crescent Square Mall, D.C. Chowk, Sector 9, Rohini, Delhi",
        "+91 98996 27202\n011-46112772",
        "4.0 ★ (130+ Reviews)",
        "NO WEBSITE\n(Traditional Offline)"
    ),
    (
        "4",
        "Verma Jewellers",
        "G-5, RG Complex, D.C. Chowk, Sector 9, Rohini, Delhi",
        "+91 98110 51928",
        "4.1 ★ (50+ Reviews)",
        "NO WEBSITE\n(Offline Retailer)"
    ),
    (
        "5",
        "Om Shiv Jewellers",
        "Shop 4 & 5, Pocket D-14, Opp Metro Pillar 413, Sector 7, Rohini, Delhi",
        "+91 84484 43171",
        "4.2 ★ (Local Counter)",
        "NO WEBSITE\n(WhatsApp Catalog Only)"
    )
]

for row in clients:
    sno, name, loc, contact, rating, status = row
    data.append([
        Paragraph(sno, cell_text_style),
        Paragraph(name, cell_title_style),
        Paragraph(loc, cell_text_style),
        Paragraph(contact.replace("\n", "<br/>"), cell_text_style),
        Paragraph(rating.replace("\n", "<br/>"), rating_style),
        Paragraph(status.replace("\n", "<br/>"), status_style),
    ])

col_widths = [30, 110, 150, 100, 85, 65]

table = Table(data, colWidths=col_widths, repeatRows=1)
table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1E293B')),
    ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
    ('TOPPADDING', (0, 0), (-1, -1), 8),
    ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.HexColor('#FFFFFF'), colors.HexColor('#F8FAFC')]),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#E2E8F0')),
]))

elements.append(table)
elements.append(Spacer(1, 16))

notes_style = ParagraphStyle(
    'NotesStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Oblique',
    fontSize=8,
    leading=11,
    textColor=colors.HexColor('#64748B')
)

elements.append(Paragraph("<b>Pitching Insight:</b> None of these prominent jewellery showrooms currently operate an official e-commerce or portfolio website. They rely entirely on offline retail footfall and direct WhatsApp messaging, making them prime candidates for premium website development proposals.", notes_style))

doc.build(elements)
print("SUCCESS: PDF created at", pdf_path)
