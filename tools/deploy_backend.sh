ssh -o StrictHostKeyChecking=no  -i "~/my_private_key.pem"  -T ubuntu@ec2-18-139-208-243.ap-southeast-1.compute.amazonaws.com "mkdir -p /tmp/deploy/backend" 
scp -o StrictHostKeyChecking=no  -i "~/my_private_key.pem" -r ./server/* "ubuntu@ec2-18-139-208-243.ap-southeast-1.compute.amazonaws.com:/tmp/deploy/backend"
ssh -o StrictHostKeyChecking=no  -i "~/my_private_key.pem"  -T ubuntu@ec2-18-139-208-243.ap-southeast-1.compute.amazonaws.com "cd /tmp/deploy/backend/ && sudo npm install && sudo pm2 restart server" 