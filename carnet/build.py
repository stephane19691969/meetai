# Construit la version hébergée à partir de la source commune du carnet
import shutil
src='/home/claude/app/'
s=open(src+'index.html').read()
head='<link rel="manifest" href="manifest.webmanifest"><meta name="theme-color" content="#16306b"><link rel="apple-touch-icon" href="apple-touch-icon.png"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-title" content="Carnet Mael"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">'
s=s.replace('<title>Carnet de bord</title>','<title>Carnet Mael</title>'+head,1)
s=s.replace('<script src="data.js"></script>','<script src="shim.js"></script><script src="data.js"></script>',1)
assert 'shim.js' in s and 'manifest.webmanifest' in s
open('/home/claude/meetai/carnet/index.html','w').write(s)
shutil.copy(src+'data.js','/home/claude/meetai/carnet/data.js')
print('ok')
