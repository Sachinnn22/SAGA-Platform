module.exports = {
    apps: [
        {
            name: "config-server",
            script: "java",
            args: "-Xms128m -Xmx256m -jar ./config-server/target/config-server-0.0.1-SNAPSHOT.jar",
            log_file: "./logs/config-server.log",
        },
        {
            name: "service-registry",
            script: "java",
            args: "-Xms128m -Xmx256m -jar ./service-registry/target/service-registry-0.0.1-SNAPSHOT.jar",
            log_file: "./logs/service-registry.log",
            restart_delay: 10000, 
        },
        {
            name: "api-gateway",
            script: "java",
            args: "-Xms128m -Xmx256m -jar ./api-gateway/target/api-gateway-0.0.1-SNAPSHOT.jar",
            log_file: "./logs/api-gateway.log",
            restart_delay: 20000,
        }
    ]
};