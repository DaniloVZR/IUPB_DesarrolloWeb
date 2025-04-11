CREATE TABLE tipo_proyecto (
    id SMALLSERIAL PRIMARY KEY,
    codigo VARCHAR(8) UNIQUE NOT NULL,
    descripcion VARCHAR(100) NOT NULL,
    abreviatura VARCHAR(50) NOT NULL,
    fecha_registro DATE NOT NULL
);