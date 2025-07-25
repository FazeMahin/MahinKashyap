const ColorPalette = () => {
  const colors = [
    { name: 'Seal Brown', class: 'bg-seal_brown', hex: '#582f0e' },
    { name: 'Russet', class: 'bg-russet', hex: '#7f4f24' },
    { name: 'Raw Umber', class: 'bg-raw_umber', hex: '#936639' },
    { name: 'Lion', class: 'bg-lion', hex: '#a68a64' },
    { name: 'Khaki', class: 'bg-khaki', hex: '#b6ad90' },
    { name: 'Sage', class: 'bg-sage', hex: '#c2c5aa' },
    { name: 'Sage Alt', class: 'bg-sage_alt', hex: '#a4ac86' },
    { name: 'Reseda Green', class: 'bg-reseda_green', hex: '#656d4a' },
    { name: 'Ebony', class: 'bg-ebony', hex: '#414833' },
    { name: 'Black Olive', class: 'bg-black_olive', hex: '#333d29' }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Earth-Toned Color Palette
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {colors.map((color) => (
          <div key={color.name} className="text-center">
            <div 
              className={`${color.class} w-16 h-16 rounded-lg mx-auto mb-2 shadow-lg`}
            />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {color.name}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              {color.hex}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
