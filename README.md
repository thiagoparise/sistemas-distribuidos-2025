## Prácticas de Sistemas Distribuidos - UNMDP

Este repositorio contiene los **ejercicios y materiales de la parte práctica** de la materia **Sistemas Distribuidos** de la **Universidad Nacional de Mar del Plata (UNMDP)**.

---

### 📂 Estructura del repositorio

Cada práctica está organizada en su propia carpeta:

Practica/  
├─ Practica1/  
│ ├─ package.json  
│ ├─ package-lock.json  
│ ├─ index.js  
│ └─ teoría-y-ejercicios.pdf  
├─ Practica2/  
│ └─ ...  
└─ Practica3/  
└─ ...  


- Cada carpeta contiene:  
  - El código de los ejercicios en JavaScript/Node.js.  
  - Archivos PDF con teoría y consignas de la práctica.  
  - Dependencias gestionadas con `package.json` y `package-lock.json`.  

---

### ⚙️ Configuración

1. Clonar el repositorio:

```bash
git clone <URL_DEL_REPO>
cd Practica

2. Instalar dependencias:

npm install

Nota: node_modules/ no está versionado. Todas las dependencias se instalan automáticamente.

3. Ejecutar scripts de Node.js según la práctica:

node Practica1/index.js