module.exports = mongoose => {
    const ChristianHernandezDB = mongoose.model(
      "productos",
      mongoose.Schema(
        {
            codigo: Number,
            nombre: String,
            precio: Number,
            existencias: Number
        },
        { timestamps: true }
      )
    );
  
    return ChristianHernandezDB;
  };