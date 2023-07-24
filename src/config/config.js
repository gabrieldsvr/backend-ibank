const config = {
    development: {
        dialect: 'mysql',
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'ibank',
        define: {
            timestamps: true, // Desabilita a criação automática de campos 'created_at' e 'updated_at'
        },
        logging: true
    },
};

module.exports = config;