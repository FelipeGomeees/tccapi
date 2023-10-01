import pool from '../../connection.js';

export class Builder {
    constructor(tabela) {
        this.queryString = tabela;
        this.error = null;
    }
    select(colunas) {
        if (this.validate()) {
            return this;
        }
        let query = '';

        for (let i = 0; i < colunas.length; i += 1) {
            if (i === (colunas.length - 1)) {
                query = query + colunas[i];
            } else {
                query = query + (colunas[i] + ',');
            }
        }
        this.queryString = `SELECT ${query} FROM ${this.queryString}`;
        return this;
    }
    set(dados) {
        if (this.validate()) {
            return this;
        }
        let updates = '';
        for (let i = 0; i < dados.length; i += 1) {
            if (i === (dados.length - 1)) {
                if (typeof dados[i][1] === 'string') {
                    updates = `${updates}${dados[i][0]} = '${(dados[i][1])}'`;
                } else {
                    updates = `${updates}${dados[i][0]} = ${(dados[i][1])}`;
                }
            } else {
                if (typeof dados[i][1] === 'string') {
                    updates = `${updates}${dados[i][0]} = '${(dados[i][1])}', `;
                } else {
                    updates = `${updates}${dados[i][0]} = ${(dados[i][1])}, `;
                }
            }
        }
        this.queryString = `UPDATE ${this.queryString} SET ${updates}`;
        return this;
    }
    where(coluna, condicao, valor) {
        if (this.validate()) {
            return this;
        }
        const temp = { coluna, condicao, valor };
        if (typeof temp.valor === 'string') {
            temp.valor = `'${temp.valor}'`
        } else if (typeof temp.valor === 'undefined') {
            this.error = new Error(`Um ou mais parametros de WHERE não foram informados`);
        }else if (typeof temp.valor !== 'number') {
            this.error = new Error(`Parametro informado no WHERE não é string ou numero`);
        }
        this.queryString = `${this.queryString} WHERE ${coluna} ${condicao} ${temp.valor}`;
        // FAZER AND WHERE
        return this;
    }
    and(coluna, condicao, valor) {
        if (this.validate()) {
            return this;
        }
        const temp = { coluna, condicao, valor };
        if (typeof temp.valor === 'string') {
            temp.valor = `'${temp.valor}'`
        } else if (typeof temp.valor === 'undefined') {
            this.error = new Error(`Um ou mais parametros de WHERE não foram informados`);
        }else if (typeof temp.valor !== 'number') {
            this.error = new Error(`Parametro informado no WHERE não é string ou numero`);
        }
        this.queryString = `${this.queryString} AND ${coluna} ${condicao} ${temp.valor}`;
        // FAZER AND WHERE
        return this;
    }
    leftJoin(tabela, colunaa, condicao, colunab) {
        if (this.validate()) {
            return this;
        }
        this.queryString = `${this.queryString} LEFT JOIN ${tabela} ON ${colunaa} ${condicao} ${colunab}`;
        return this;
    }
    orderBy(coluna, ordenacao) {
        if (this.validate()) {
            return this;
        }
        this.queryString = `${this.queryString} ORDER BY ${coluna} ${ordenacao}`;
        return this;
    }
    groupBy(colunas) {
        if (this.validate()) {
            return this;
        }
        const query = '';
        for (let i = 0; i < colunas.length; i += 1) {
            if (i !== colunas.length) {
                query = query + colunas[i];
            } else {
                query = query + colunas[i] + ',';
            }
        }
        this.queryString = `${this.queryString} GROUP BY ${query}`;
        return this;
    }
    insert(dados) {
        // TRATAR STRING
        let valores = '';
        let colunas = '';

        for (let i = 0; i < dados.length; i += 1) {
            if (i === (dados.length - 1)) {
                if (typeof dados[i][1] === 'string') {
                    valores = `${valores}'${(dados[i][1])}'`;
                } else {
                    valores = valores + (dados[i][1]);
                }
                colunas = colunas + dados[i][0]
            } else {
                if (typeof dados[i][1] === 'string') {
                    valores = `${valores}'${(dados[i][1])}',`;
                } else {
                    valores = valores + (dados[i][1] + ',');
                }
                colunas = colunas + (dados[i][0] + ',');
            }
        }
        this.queryString = `INSERT INTO ${this.queryString} (${colunas}) VALUES (${valores}) RETURNING *`;
        return this;
    }
    async commit() {
        if (this.validate()) {
            return this.error;
        }
        try {
            const data = (await pool.query(this.queryString)).rows;
            return data;
        } catch(e) {
            return e
        }
    }
    validate() {
        return (typeof this.queryString !== 'string' || this.error) ? true : false;
    }
    raw(raw) {
        this.queryString = raw;
        return this;
    }
};