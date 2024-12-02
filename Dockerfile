FROM quay.io/qasimali9263/TSUKUYOMI-md:latest
RUN git clone https://github.com/Tristan7122/TSUKUYOMI-MUILT-DEVICE.git /root/TSUKUYOMI-MD 
WORKDIR /root/TSUKUYOMI-MD 
RUN npm install
RUN npm install -g pm2
EXPOSE 8000
CMD ["npm","start" ]
