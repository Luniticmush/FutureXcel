import pathlib
import re

root = pathlib.Path('.')
map = {
    '/training': '/src/pages/training.html',
    '/careers': '/src/pages/careers.html',
    '/about': '/src/pages/about.html',
    '/contact': '/src/pages/contact.html',
    '/services-endpoint': '/src/pages/services/services-endpoint.html',
    '/services-helpdesk': '/src/pages/services/services-helpdesk.html',
    '/services-software': '/src/pages/services/services-software.html',
    '/services-research': '/src/pages/services/services-research.html',
    '/services-consulting': '/src/pages/services/services-consulting.html',
    '/services-data': '/src/pages/services/services-data.html',
    '/services-ml': '/src/pages/services/services-ml.html',
    '/services-cloud': '/src/pages/services/services-cloud.html',
    '/services-training': '/src/pages/services/services-training.html',
}
pattern = re.compile(r'(href=["\'])(%s)(["\'])' % '|'.join(re.escape(k) for k in map.keys()))
modified = 0
for path in root.rglob('*.html'):
    text = path.read_text(encoding='utf-8')
    new_text = pattern.sub(lambda m: m.group(1) + map[m.group(2)] + m.group(3), text)
    if new_text != text:
        path.write_text(new_text, encoding='utf-8')
        modified += 1
print(f'updated {modified} html files')
