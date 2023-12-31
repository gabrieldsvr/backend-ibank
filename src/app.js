require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {migration} = require("./database/migrations");

// ROTAS
const healthCheckRoutes = require("./routes/HealthCheckRoutes");
const contasRoutes = require("./routes/contasRouter");
const categoriasRoutes = require("./routes/categoriasRouter");
const transacoesRoutes = require("./routes/transacoesRouter");
const usuariosRoutes = require("./routes/usuariosRouter");
const loginRoutes = require("./routes/loginRouter");

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

if (process.env.RUN_MIGRATIONS === 'true') {
    migration();
}

app.use('/api', healthCheckRoutes);
app.use('/api', contasRoutes);
app.use('/api', categoriasRoutes);
app.use('/api', transacoesRoutes);
app.use('/api', usuariosRoutes);
app.use('/api', loginRoutes);
app.listen(8090, () => {
    console.log('Servidor rodando na porta 8090');
});

