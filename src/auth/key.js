export default function (req) {
    if (!req.headers.authorization) {
        return 401;
    }
    const token = req.headers.authorization.replace('Bearer ', ''); 
    const key = '$5#_6497><8)';
    if (token === key) {
        return false;
    };
    return 401;
}
