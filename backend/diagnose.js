const dns = require('dns').promises;
const net = require('net');
const os = require('os');
require('dotenv').config();

async function diagnose() {
    console.log("🔍 Iniciando diagnóstico de conectividade...\n");
    
    console.log("📋 Informações do Sistema:");
    console.log("  - Plataforma:", os.platform());
    console.log("  - Arquitetura:", os.arch());
    
    console.log("\n📊 Configurações do Banco:");
    console.log("  - Host:", process.env.DB_HOST);
    console.log("  - Port:", process.env.DB_PORT);
    console.log("  - User:", process.env.DB_USER);
    console.log("  - SSL:", process.env.DB_SSL);
    
    // Test DNS
    console.log("\n🌐 Testando DNS...");
    try {
        const host = process.env.DB_HOST;
        const addresses = await dns.resolve4(host);
        console.log("✅ DNS resolvido com sucesso!");
        console.log("  - IPs:", addresses.join(", "));
    } catch (error) {
        console.error("❌ Erro ao resolver DNS:", error.message);
        console.error("\n💡 Possíveis causas:");
        console.error("  1. Sem conexão com internet");
        console.error("  2. Firewall/proxy bloqueando");
        console.error("  3. Nome do host incorreto");
        return;
    }
    
    // Test TCP connection
    console.log("\n🔌 Testando conexão TCP...");
    const socket = net.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        timeout: 5000
    });
    
    socket.on('connect', () => {
        console.log("✅ Conexão TCP estabelecida com sucesso!");
        socket.destroy();
    });
    
    socket.on('error', (error) => {
        console.error("❌ Erro na conexão TCP:", error.message);
    });
    
    socket.on('timeout', () => {
        console.error("❌ Timeout na conexão TCP (5s)");
        socket.destroy();
    });
}

diagnose();
