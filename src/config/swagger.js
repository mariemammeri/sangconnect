
import swaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",

        info: {
            title: "SangConnect API",
            version: "1.0.0",
            description: "Documentation de l'API SangConnect - Gestion des dons de sang"
        },

        servers: [
            {
                url: "http://localhost:3000",
                description: "Serveur local"
            }
        ],

        components: {
            schemas: {

                // 1. Login Request
                LoginRequest: {
                    type: "object",
                    properties: {
                        email: {
                            type: "string",
                            format: "email",
                            example: "admin@sangconnect.tn"
                        },
                        password: {
                            type: "string",
                            format: "password",
                            example: "MotDePasseExemple"
                        }
                    },
                    required: ["email", "password"]
                },

                // 2. Login Response
                LoginResponse: {
                    type: "object",
                    properties: {
                        accessToken: {
                            type: "string",
                            description: "Token JWT d'accès."
                        },
                        tokenType: {
                            type: "string",
                            example: "Bearer"
                        }
                    }
                },

                // 3. Donneur
                Donneur: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            example: 1
                        },
                        nom: {
                            type: "string",
                            example: "Ben Ali"
                        },
                        prenom: {
                            type: "string",
                            example: "Ahmed"
                        },
                        groupeSanguin: {
                            type: "string",
                            example: "A+"
                        }
                    }
                },

                // 4. Error Response
                ErrorResponse: {
                    type: "object",
                    required: ["message"],
                    properties: {
                        message: {
                            type: "string",
                            example: "Donneur introuvable."
                        },
                        code: {
                            type: "string",
                            example: "NOT_FOUND"
                        },
                        details: {
                            type: "array",
                            items: {
                                type: "string"
                            },
                            example: [
                                "Le donneur demandé n'existe pas."
                            ]
                        }
                    }
                },

                // 5. Create Donneur
                CreateDonneur: {
                    type: "object",
                    properties: {
                        nom: {
                            type: "string",
                            example: "Ben Ali"
                        },
                        prenom: {
                            type: "string",
                            example: "Ahmed"
                        },
                        groupeSanguin: {
                            type: "string",
                            example: "A+"
                        }
                    },
                    required: ["nom", "prenom", "groupeSanguin"]
                }

            },

            // JWT Authentication
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        }
    },

    apis: ["./src/routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
