// frontend/src/data/services.js
export const servicesList = [
  // General Trades
  { slug: 'general-contractors', name: 'General Contractors', category: 'General', description: 'Complete bid packages for GCs including all trades, site work, and general conditions.' },
  { slug: 'drywall-contractor', name: 'Drywall Contractor', category: 'Finishes', description: 'Drywall material takeoffs, stud framing, insulation, and finishing estimates.' },
  { slug: 'carpentry-contractor', name: 'Carpentry Contractor', category: 'Woodwork', description: 'Framing, trim, cabinetry, and custom millwork estimates.' },
  { slug: 'mep-contractor', name: 'MEP Contractor', category: 'Mechanical', description: 'Mechanical, Electrical, Plumbing coordinated estimates.' },
  { slug: 'excavation-contractor', name: 'Excavation Contractor', category: 'Site Work', description: 'Earthwork, grading, trenching, and site preparation estimates.' },
  { slug: 'fabricators-contractor', name: 'Fabricators Contractor', category: 'Metal', description: 'Steel fabrication, welding, and metalwork quantity takeoffs.' },
  { slug: 'roofing-contractors', name: 'Roofing Contractors', category: 'Exterior', description: 'Roofing material takeoffs including shingles, metal, tiles, and accessories.' },
  { slug: 'demolition-contractors', name: 'Demolition Contractors', category: 'Site Work', description: 'Demolition quantity takeoffs and waste removal estimates.' },
  { slug: 'electrical-contractors', name: 'Electrical Contractors', category: 'Electrical', description: 'Electrical takeoffs, panel schedules, conduit, wiring, and fixtures.' },
  { slug: 'plumbing-contractors', name: 'Plumbing Contractors', category: 'Plumbing', description: 'Pipe takeoffs, fixture counts, water heaters, and drainage systems.' },
  { slug: 'concrete-contractors', name: 'Concrete Contractors', category: 'Structural', description: 'Concrete volume, rebar, formwork, and finishing estimates.' },
  { slug: 'lumber-contractor', name: 'Lumber Contractor', category: 'Materials', description: 'Lumber and timber quantity takeoffs for framing and structural work.' },
  { slug: 'masonry-contractors', name: 'Masonry Contractors', category: 'Masonry', description: 'Block, brick, stone, and mortar quantity takeoffs.' },
  { slug: 'insulation-contractor', name: 'Insulation Contractor', category: 'Finishes', description: 'Spray foam, batt, and blown insulation estimates.' },
  { slug: 'landscaping-contractors', name: 'Landscaping Contractors', category: 'Exterior', description: 'Site grading, planting, irrigation, and hardscape estimates.' },
  { slug: 'painting-contractors', name: 'Painting Contractors', category: 'Finishes', description: 'Paint quantity takeoffs and labor estimates.' },
  { slug: 'remodeling-contractors', name: 'Remodeling Contractors', category: 'Renovation', description: 'Renovation and remodeling estimates for existing structures.' },
  { slug: 'fireplace-contractors', name: 'Fireplace Contractors', category: 'Specialty', description: 'Fireplace installation and masonry estimates.' },
  { slug: 'hvac-contractors', name: 'HVAC Contractors', category: 'Mechanical', description: 'HVAC ductwork, equipment, and controls estimates.' },
  { slug: 'handyman-contractors', name: 'Handyman Contractors', category: 'General', description: 'Small project and repair estimates.' },
  { slug: 'fence-contractors', name: 'Fence Contractors', category: 'Exterior', description: 'Fencing material and installation estimates.' },
  { slug: 'flooring-contractors', name: 'Flooring Contractors', category: 'Finishes', description: 'Flooring material takeoffs including tile, hardwood, carpet, and LVP.' },
  { slug: 'construction-drawing-contractors', name: 'Construction Drawing Contractors', category: 'Design', description: 'Construction drawing review and quantity extraction.' },
  { slug: 'siding-exterior-contractors', name: 'Siding Exterior Contractors', category: 'Exterior', description: 'Siding, soffit, fascia, and exterior trim estimates.' },
  { slug: 'metal-framing-contractor', name: 'Metal Framing Contractor', category: 'Structural', description: 'Light gauge and heavy gauge metal framing estimates.' },
  { slug: 'interior-designing-contractor', name: 'Interior Designing Contractor', category: 'Design', description: 'Interior finishes, FF&E, and decorative estimates.' },
  { slug: 'exterior-designing-contractor', name: 'Exterior Designing Contractor', category: 'Design', description: 'Exterior facade, cladding, and architectural features.' },
  { slug: 'landscape-designing-contractor', name: 'Landscape Designing Contractor', category: 'Design', description: 'Landscape design and site amenity estimates.' },
  { slug: 'general-requirements-contractor', name: 'General Requirements Contractor', category: 'General', description: 'General conditions, permits, fees, and overhead estimates.' },
  { slug: 'architects-building-designers', name: 'Architects & Building Designers', category: 'Design', description: 'Design-phase estimating and budget analysis.' },
  { slug: 'kitchen-bathroom-remodelers', name: 'Kitchen & Bathroom Remodelers', category: 'Renovation', description: 'Kitchen and bathroom renovation estimates.' },
  { slug: 'roofing-gutters', name: 'Roofing & Gutters', category: 'Exterior', description: 'Roofing and gutter system estimates.' },
  
  // Design & Documentation
  { slug: 'permit-drawings', name: 'Permit Drawings', category: 'Documentation', description: 'Permit set review and quantity extraction.' },
  { slug: 'permit-set', name: 'Permit Set', category: 'Documentation', description: 'Complete permit drawing set estimating.' },
  { slug: 'blueprint', name: 'Blueprint', category: 'Documentation', description: 'Blueprint reading and material takeoff.' },
  { slug: 'structural-drawings', name: 'Structural Drawings', category: 'Documentation', description: 'Structural drawing quantity takeoffs.' },
  { slug: 'structural-calculations', name: 'Structural Calculations', category: 'Documentation', description: 'Structural calculation review and estimating.' },
  
  // 3D & Visualization
  { slug: '3d-rendering', name: '3D Rendering', category: 'Visualization', description: 'Photorealistic 3D renderings for proposals and marketing.' },
  { slug: '3d-design', name: '3D Design', category: 'Visualization', description: '3D design and modeling services.' },
  { slug: '3d-modeling', name: '3D Modeling', category: 'Visualization', description: 'BIM and 3D modeling for quantity extraction.' },
  { slug: '3d-visualization', name: '3D Visualization', category: 'Visualization', description: 'Architectural visualization and walkthroughs.' },
  { slug: 'floor-plans', name: 'Floor Plans', category: 'Documentation', description: 'Floor plan analysis and quantity takeoff.' }
]

export const serviceCategories = [
  'All',
  'General',
  'Structural',
  'Electrical',
  'Plumbing',
  'Mechanical',
  'Finishes',
  'Exterior',
  'Site Work',
  'Design',
  'Documentation',
  'Visualization',
  'Renovation',
  'Specialty'
]

export const getServiceBySlug = (slug) => {
  return servicesList.find(service => service.slug === slug)
}

export default servicesList