import { v4 as uuid } from 'uuid'

const tabela = 'token';

export default function(data) {
    const { 
        tokusuario,
        tokexpiracao,
    } = data;

    const sql = `INSERT INTO ${tabela} 
        (
            toktoken, 
            tokusuario,
            tokexpiracao,
        )
            VALUE
        (
            '${uuid()}', 
            '${tokusuario}', 
            '${tokexpiracao}'
        )` 

        return sql;
}