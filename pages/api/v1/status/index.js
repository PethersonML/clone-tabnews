import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString()
  const version = await database.query("SELECT version();")
  const maxConnections = await database.query("show max_connections;")
  const activeConnections = await database.query("SELECT * FROM pg_stat_activity WHERE datname = '" + process.env.POSTGRES_DB + "' and state = 'active';")

  response.status(200).json({
    updated_at: updatedAt,
    postgres_version: version.rows[0].version,
    max_connections: maxConnections.rows[0].max_connections,
    active_connections: activeConnections.rowCount
  });
}

export default status;