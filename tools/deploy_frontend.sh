ssh -o StrictHostKeyChecking=no  -i "~/my_private_key.pem"  -T ubuntu@ec2-18-139-208-243.ap-southeast-1.compute.amazonaws.com "mkdir -p /tmp/deploy/frontend" 
scp -o StrictHostKeyChecking=no  -i "~/my_private_key.pem" -r ./build/* "ubuntu@ec2-18-139-208-243.ap-southeast-1.compute.amazonaws.com:/tmp/deploy/frontend"
