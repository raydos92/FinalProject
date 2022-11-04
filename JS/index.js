addItem(name, description,imageUrl) {
    const item = {
        // Increment the currentId property
        id: this.currentId++,
        name: name,
        description: description,
        imageUrl: imageUrl
    };