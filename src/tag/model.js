import modelRules from '../utils/modelRules.js'

export function model (payload) {
    return {
        usename: payload.usename,
        usepassword: payload.usepassword,
    }
}

export function createRules(payload) {
    const value = model(payload);
    const validation = {
        usenome: modelRules(value.usename, { max: 10, nullable }),
        usepassword:  modelRules(value.usepassword, { max: 6, nullable }),
    }
}

export function updateRules (payload) {

}