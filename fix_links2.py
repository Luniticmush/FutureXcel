import pathlib

root = pathlib.Path('.')
replacements = {
    'href="/training"': 'href="/src/pages/training.html"',
    "href='/training'": "href='/src/pages/training.html'",
    'href="/careers"': 'href="/src/pages/careers.html"',
    "href='/careers'": "href='/src/pages/careers.html'",
    'href="/about"': 'href="/src/pages/about.html"',
    "href='/about'": "href='/src/pages/about.html'",
    'href="/contact"': 'href="/src/pages/contact.html"',
    "href='/contact'": "href='/src/pages/contact.html'",
    'href="/services-endpoint"': 'href="/src/pages/services/services-endpoint.html"',
    "href='/services-endpoint'": "href='/src/pages/services/services-endpoint.html'",
    'href="/services-helpdesk"': 'href="/src/pages/services/services-helpdesk.html"',
    "href='/services-helpdesk'": "href='/src/pages/services/services-helpdesk.html'",
    'href="/services-software"': 'href="/src/pages/services/services-software.html"',
    "href='/services-software'": "href='/src/pages/services/services-software.html'",
    'href="/services-research"': 'href="/src/pages/services/services-research.html"',
    "href='/services-research'": "href='/src/pages/services/services-research.html'",
    'href="/services-consulting"': 'href="/src/pages/services/services-consulting.html"',
    "href='/services-consulting'": "href='/src/pages/services/services-consulting.html'",
    'href="/services-data"': 'href="/src/pages/services/services-data.html"',
    "href='/services-data'": "href='/src/pages/services/services-data.html'",
    'href="/services-ml"': 'href="/src/pages/services/services-ml.html"',
    "href='/services-ml'": "href='/src/pages/services/services-ml.html'",
    'href="/services-cloud"': 'href="/src/pages/services/services-cloud.html"',
    "href='/services-cloud'": "href='/src/pages/services/services-cloud.html'",
    'href="/services-training"': 'href="/src/pages/services/services-training.html"',
    "href='/services-training'": "href='/src/pages/services/services-training.html'",
}
modified = 0
for path in root.rglob('*.html'):
    text = path.read_text(encoding='utf-8')
    new_text = text
    for old, new in replacements.items():
        new_text = new_text.replace(old, new)
    if new_text != text:
        path.write_text(new_text, encoding='utf-8')
        modified += 1
print(f'updated {modified} html files')
