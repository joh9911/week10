import mysql from 'mysql2';

const pool = mysql.createPool(
    process.env.JAWSDB_URL ??{
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'min11090`',
    database: 'week10',
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
});

const promisePool = pool.promise();

export const selectSql = { //export 딴데서도 함수 쓸 수 있음
    getUsers: async () => {
        const sql = `select * from user`;
        const [result] = await promisePool.query(sql);

        return result;
    },

    getDepartment: async () => {
        const sql = `select * from department`;
        const [result] = await promisePool.query(sql);

        return result
    },
};

export const deleteSql = {
    deleteDepartment: async (data) =>{
        console.log("deleteSql.deleteDepartment:", data.Dnumber);
        const sql = `delete from department where Dnumber=${data.Dnumber}`

        await promisePool.query(sql);
    },
};



