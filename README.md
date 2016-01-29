# Zooop-Server
Sever Side Application
<a href="http://www.zooop.xyz/">Zooop</a>
## Ubuntu VM
To connect to the VM you'll need the zooom.pem file, which is available on the #server channel on slack.

<i>This section will be updated as we continue to develop the application</i>
### VM Commands
- Authenticate zooop.pem => `chmod 400 ./zooop.pem`
- Access the VM `ssh -i "~/path to/zooop.pem" ubuntu@ec2-52-49-107-62.eu-west-1.compute.amazonaws.com`  
- Exit VM `exit`

### Deploying Server
- `cd` into working directory
- Run `nodejs server.js`
