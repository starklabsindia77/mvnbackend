const { pki, md, asn1 } = require('node-forge');
module.exports = function(req, res, next) {
        // try {
        //         // // Get header
        //         const header = req.get('X-ARR-ClientCert');

        //         if (!header) throw new Error('UNAUTHORIZED');
        //         // Convert from PEM to pki.CERT
        //         const pem =`-----BEGIN CERTIFICATE-----${header}-----END CERTIFICATE-----`;
        //         console.log('certification::', pem)
        //         const incomingCert = pki.Certificate=pki.certificateFromPem(pem);
                
        //         // Validate certificate thumbprint
        //         const fingerPrint = md.sha1.create().update(asn1.toDer(pki.certificateToAsn1(incomingCert)).getBytes()).digest().toHex();
                
        //         if (fingerPrint.toLowerCase() !== '361b37d4035230720b783a1fd4b349d99763a19d') throw new Error('UNAUTHORIZED');
                
        //         // Validate time validity
        //         console.log('certification::', fingerPrint,pki.Certificate)
        //         const currentDate = new Date();
        //         if (currentDate < incomingCert.validity.notBefore || currentDate > incomingCert.validity.notAfter) throw new Error('UNAUTHORIZED');
                
        //         // Validate issuer
        //         console.log('incomingCert.validity.notBefore::', incomingCert.issuer.hash,incomingCert.subject.hash)
        //         if (incomingCert.issuer.hash.toLowerCase() !== '57336efadebe6b5f2ae4ad05809451523c2e7c32') throw new Error('UNAUTHORIZED');
                
        //         // Validate subject
        //         if (incomingCert.subject.hash.toLowerCase() !== '57336efadebe6b5f2ae4ad05809451523c2e7c32') throw new Error('UNAUTHORIZED');
        
        //         next();
        //     } catch (e) {
        //         if (e instanceof Error && e.message === 'UNAUTHORIZED') {
        //             res.send(e.message)
        //             res.status(401).send();
        //         } else {
        //             next(e);
        //         }
        //     }
        next();
};