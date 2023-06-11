const loadState = (key) => {
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.log('Error al cargar el estado desde el almacenamiento local:', err);
      return undefined;
    }
  };
  
  // Guardar un estado en el almacenamiento local
  const saveState = (key, state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch (err) {
      console.log('Error al guardar el estado en el almacenamiento local:', err);
    }
  };