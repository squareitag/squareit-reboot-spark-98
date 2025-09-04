#!/bin/bash

# Replace all gradient hover effects with dark blue hover
sed -i 's/hover:border-primary\/30 hover:bg-gradient-to-br hover:from-primary\/5 hover:to-primary\/10/hover:border-secondary-accent hover:bg-secondary-accent/g' src/components/ModernHeader.tsx

# Replace icon hover backgrounds  
sed -i 's/group-hover:bg-primary\/20/group-hover:bg-primary\/30/g' src/components/ModernHeader.tsx

# Add white text hover for icons without it
sed -i 's/text-primary" \/>/text-primary group-hover:text-white" \/>/g' src/components/ModernHeader.tsx

echo "Updated all menu hover effects to dark blue!"