const connection = require("./database/database");

// Importar models
const User = require("./database/User");
const Property = require("./database/Property");
const UserProperty = require("./database/UserProperty");
const Gleba = require("./database/Gleba");
const Safra = require("./database/Safra");
const Invite = require("./database/Invite");
const Custo = require("./database/Custo");
const SafraGleba = require("./database/SafraGleba");
const StorageItem = require("./database/StorageItem");

async function syncDatabase() {
    try {
        console.log("🔄 Sincronizando banco de dados com Aiven...");
        await connection.authenticate();
        console.log("✅ Conexão estabelecida com sucesso!");
        
        await connection.sync({ force: false }); // false = não dropa tabelas existentes
        console.log("✅ Banco de dados sincronizado com sucesso!");
        
        process.exit(0);
    } catch (error) {
        console.error("❌ Erro ao sincronizar:", error.message);
        process.exit(1);
    }
}

syncDatabase();
