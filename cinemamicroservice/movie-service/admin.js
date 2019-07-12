admin = db.getSibilingDB("admin")

admin.createUser(
    {
        user:"cristian",
        pwd: "cristianPasswords2017",
        roles: [    {   role: "userAdminAnyDatabase", db: "admin"}]
    }
)

db.getSibilingDB("admin").auth("cristian", "cristianPasswods2017")

db.getSibilingDB("admin").createUser(
    {
        user:"replicaAdmin",
        pwd: "replicaAdminPasswords2017",
        roles: [    {   role: "clusterAdmin", db: "admin"}]
    }
)