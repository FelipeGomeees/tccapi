import Builder from '../utils/queryBuilder.js';
import Model from './model.js';
import TokenRepository from '../token/repository.js';

const saltRounds = 10;

export default function HasherMain(req, method) {
    if (!req.headers.authorization) {
        return 401;
    }
    const token = req.headers.authorization.replace('Bearer ', ''); 
    const existe = TokenRepository.find(token);
    if (existe) {
        return false;
    };
    return 401;
}

export function Hasher(texto, method) {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(texto, salt, function(err, hash) {
        // returns hash
        console.log(hash);
        return hash;
        });
    });
}