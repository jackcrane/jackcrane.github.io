import urllib, re

data = re.search('"([0-9.]*)"', urllib.urlopen("http://ip.jsontest.com/").read()).group(1)

print data

import urllib2, urllib
mydata=[('ipaddr',data)]    #The first is the var name the second is the value
mydata=urllib.urlencode(mydata)
path='http://jack-app.000webhostapp.com/postip.php'    #the url you want to POST to
req=urllib2.Request(path, mydata)
req.add_header("Content-type", "application/x-www-form-urlencoded")
page=urllib2.urlopen(req).read()
print page