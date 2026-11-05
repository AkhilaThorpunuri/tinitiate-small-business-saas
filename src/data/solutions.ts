export type Solution = {
  id: string
  title: string
  short: string
  problem: string
  challenges: string[]
  overview: string
  features: string[]
  benefits: string[]
  workflow: string[]
  icon: string
}

export type Business = {
  id: string
  name: string
  eyebrow: string
  description: string
  icon: string
  accent: string
  image: string
  solutions: Solution[]
}

const supermarket: Solution[] = [
  {
    id: 'stock-management',
    title: 'Stock Management',
    short: 'Know what is available, what needs replenishing and what to order.',
    problem: 'Stock is often tracked manually across shelves, storage areas and supplier conversations. This makes it difficult to know what is available or when to reorder.',
    challenges: ['Unclear stock levels across locations', 'Reordering happens late or relies on memory', 'Wholesale purchase lists are prepared manually', 'Supplier communication is scattered across calls and messages'],
    overview: 'A centralized stock management workspace that helps supermarket teams monitor inventory, prepare purchase lists and communicate orders to suppliers.',
    features: ['Live product stock register with low-stock indicators', 'Supplier-wise purchase order preparation', 'Send order summaries to suppliers through WhatsApp', 'Wholesale shopping checklist grouped by supplier or category', 'Stock movement history and adjustment records', 'Search and filter by product, category or supplier'],
    benefits: ['Fewer stock-outs and missed replenishments', 'Faster wholesale purchasing', 'Clearer supplier communication', 'Better visibility into everyday stock movement'],
    workflow: ['Maintain product, supplier and reorder details', 'Update stock when goods are received or sold', 'Review low-stock items and create a purchase list', 'Share the order with the supplier through WhatsApp'],
    icon: 'Boxes'
  },
  {
    id: 'stock-wastage',
    title: 'Stock Wastage Management',
    short: 'Record damaged, expired and unsellable products and understand the loss.',
    problem: 'Expired, damaged or unsellable products can go unnoticed. Without consistent records, owners cannot identify recurring wastage or understand its financial impact.',
    challenges: ['Expiry dates are not reviewed consistently', 'Damaged items are not recorded in one place', 'Wastage quantities and costs are hard to calculate', 'No simple way to identify high-wastage products'],
    overview: 'A wastage tracking solution for recording product losses, monitoring expiry dates and reviewing wastage trends.',
    features: ['Record damaged, expired, returned and other wastage types', 'Capture product, quantity, date, reason and estimated cost', 'Expiry-date monitoring and upcoming-expiry alerts', 'Daily, weekly and monthly wastage summaries', 'Product-wise and category-wise wastage analysis', 'Exportable records for review'],
    benefits: ['Reduce avoidable inventory losses', 'Identify products that need closer monitoring', 'Improve ordering and stock rotation decisions', 'Create accountability through consistent records'],
    workflow: ['Add products and their expiry details', 'Review upcoming expiry and at-risk stock', 'Record wastage with reason and quantity', 'Analyze reports and adjust future purchasing'],
    icon: 'Trash2'
  },
  {
    id: 'payroll',
    title: 'Payroll Management',
    short: 'Organize employee information, attendance inputs and salary records.',
    problem: 'Small supermarkets may calculate salaries using separate registers, spreadsheets or messages, making monthly payroll repetitive and difficult to verify.',
    challenges: ['Employee details are spread across documents', 'Attendance and salary inputs need manual consolidation', 'Salary history is difficult to retrieve', 'Payroll calculations take time each month'],
    overview: 'A structured employee and payroll workspace to maintain staff records and organize monthly salary calculations.',
    features: ['Employee master records and role details', 'Attendance and working-day inputs', 'Salary components, deductions and adjustments', 'Monthly payroll summaries', 'Employee-wise salary history', 'Downloadable payroll statements'],
    benefits: ['Less repetitive payroll administration', 'More consistent salary records', 'Faster monthly review', 'Easier access to employee information'],
    workflow: ['Create employee profiles', 'Enter attendance and salary inputs', 'Review calculated monthly payroll', 'Approve and store salary statements'],
    icon: 'Wallet'
  },
  {
    id: 'customer-product-masters',
    title: 'Customer & Product Masters',
    short: 'Keep customer and product information organized and reusable.',
    problem: 'Customer details, product information and product bundles may be maintained in different places, leading to duplicate entries and inconsistent records.',
    challenges: ['Customer information is difficult to search', 'Product details are entered repeatedly', 'Product combinations are not centrally maintained', 'Teams need a reliable source of master data'],
    overview: 'A central place to maintain customer profiles, product catalogs, categories and product combos for day-to-day operations.',
    features: ['Customer profiles with contact and purchase notes', 'Product catalog with SKU, category and pricing fields', 'Product combo and bundle definitions', 'Search, filter and update master records', 'Import-ready structured product records', 'WhatsApp-ready customer contact actions'],
    benefits: ['Consistent information across workflows', 'Quicker product and customer lookup', 'Easier creation of bundles and combos', 'A stronger foundation for marketing and POS integration'],
    workflow: ['Create or import customer and product records', 'Organize products into categories', 'Configure combos and bundles', 'Reuse the records in offers and outreach'],
    icon: 'ContactRound'
  },
  {
    id: 'customer-outreach',
    title: 'Customer Outreach',
    short: 'Reach customers through organized WhatsApp and SMS campaigns.',
    problem: 'Promotional messages are often sent manually, making it hard to organize customer groups, coordinate campaigns and track what was communicated.',
    challenges: ['Customer contact lists are not segmented', 'Messages are sent one by one', 'Campaign communication is inconsistent', 'Teams cannot easily review previous outreach'],
    overview: 'A customer communication workspace to organize audiences and prepare WhatsApp or SMS outreach.',
    features: ['Customer groups and audience segmentation', 'WhatsApp message templates and campaign drafts', 'SMS campaign preparation', 'Campaign scheduling fields and status tracking', 'Customer opt-out and consent fields', 'Campaign history and delivery status placeholders'],
    benefits: ['More organized customer communication', 'Less manual message preparation', 'Relevant offers for different customer groups', 'A repeatable outreach process'],
    workflow: ['Organize customer contacts and consent', 'Choose a customer segment', 'Prepare a WhatsApp or SMS campaign', 'Schedule or send using a connected provider'],
    icon: 'MessageCircle'
  },
  {
    id: 'offers',
    title: 'Offers & Promotions',
    short: 'Plan promotions with start and end dates and connect them to POS workflows.',
    problem: 'Offers can be difficult to coordinate across store teams, customer messages and point-of-sale systems, especially when validity dates are missed.',
    challenges: ['Offer start and end dates are not centrally tracked', 'Cashiers may not have the latest offer details', 'Customers are not informed consistently', 'Offer performance is difficult to review'],
    overview: 'A promotion planner for creating offers, defining validity periods and preparing communication for WhatsApp, SMS and POS integration.',
    features: ['Create offers with terms and eligibility', 'Start date, end date and active status', 'Offer types such as discount, bundle and seasonal promotion', 'WhatsApp and SMS message drafts', 'POS integration-ready offer records', 'Offer calendar and campaign history'],
    benefits: ['Clear promotion timelines', 'Consistent offer information for staff', 'Better customer awareness', 'A foundation for measuring promotion performance'],
    workflow: ['Create the offer and define its terms', 'Set the start and end dates', 'Prepare customer communication', 'Sync offer details with an integrated POS system'],
    icon: 'BadgePercent'
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    short: 'Plan store updates and promotions across social channels.',
    problem: 'Small businesses often post irregularly because content ideas, images, captions and publishing plans are managed separately.',
    challenges: ['No consistent posting calendar', 'Captions and creative assets are scattered', 'Promotional posts are not planned ahead', 'It is difficult to review content activity'],
    overview: 'A simple social media planning workspace to organize content ideas, captions, creatives and publishing schedules.',
    features: ['Content calendar and campaign planning', 'Post captions and hashtag library', 'Creative asset organization', 'Platform-wise content status', 'Promotion and festival campaign planning', 'Performance notes and reporting fields'],
    benefits: ['More consistent brand communication', 'Less last-minute content preparation', 'Better coordination of promotional campaigns', 'A reusable content history'],
    workflow: ['Plan upcoming campaigns', 'Prepare captions and creative assets', 'Assign publishing dates and channels', 'Update post status and review results'],
    icon: 'Share2'
  }
]

const apparel: Solution[] = [
  {
    id: 'catalog-management',
    title: 'Product Catalogue Management',
    short: 'Organize apparel styles, sizes, colors, variants and product details.',
    problem: 'Apparel businesses manage many combinations of sizes, colors and styles. Inconsistent catalog information makes products harder to publish and maintain.',
    challenges: ['Size and color variants are difficult to organize', 'Product details are repeated across channels', 'New collections take time to publish', 'Discontinued items may remain visible'],
    overview: 'A centralized apparel catalog for managing products, variants, collections and channel-ready product information.',
    features: ['Product records with style, SKU and description', 'Size and color variant management', 'Collection and category organization', 'Product image and specification fields', 'Active, draft and archived product status', 'Bulk catalog import structure'],
    benefits: ['More consistent product listings', 'Quicker collection updates', 'Better variant visibility', 'Less catalog maintenance effort'],
    workflow: ['Create a product and style record', 'Add sizes, colors and variant SKUs', 'Attach product details and images', 'Publish or update the collection'],
    icon: 'Shirt'
  },
  {
    id: 'orders-fulfilment',
    title: 'Order & Fulfilment Management',
    short: 'Track online orders from confirmation through dispatch and delivery.',
    problem: 'Orders arriving from multiple channels can be difficult to coordinate, increasing the chance of delayed dispatches or missed updates.',
    challenges: ['Orders need to be checked across channels', 'Packing and dispatch status is unclear', 'Customers ask for repeated order updates', 'Returns and exchanges need follow-up'],
    overview: 'An order operations workspace for tracking order status, fulfilment tasks, dispatch and returns.',
    features: ['Central order list and order detail view', 'Order status and fulfilment stages', 'Packing checklist and dispatch notes', 'Shipment tracking reference fields', 'Return and exchange tracking', 'Customer update message templates'],
    benefits: ['Clearer order visibility', 'Fewer missed fulfilment steps', 'More consistent customer updates', 'Better handling of returns and exchanges'],
    workflow: ['Receive and confirm the order', 'Check stock and prepare items', 'Pack and dispatch the shipment', 'Update delivery and return status'],
    icon: 'PackageCheck'
  },
  {
    id: 'inventory-variants',
    title: 'Apparel Inventory & Variants',
    short: 'Monitor inventory by style, size and color.',
    problem: 'A style may be available in one size or color but unavailable in another. High-level stock totals hide these variant-level gaps.',
    challenges: ['Variant stock is difficult to monitor', 'Popular sizes sell out unexpectedly', 'Slow-moving variants occupy storage', 'Restocking decisions lack detail'],
    overview: 'Variant-level inventory tracking to help apparel sellers understand availability by style, size and color.',
    features: ['Stock counts by SKU, size and color', 'Low-stock thresholds by variant', 'Stock adjustment and movement history', 'Restock lists for suppliers', 'Slow-moving and out-of-stock views', 'Inventory summary by collection'],
    benefits: ['Fewer overselling situations', 'Smarter replenishment', 'Clearer size and color availability', 'Improved inventory planning'],
    workflow: ['Set up variant SKUs', 'Record incoming and outgoing stock', 'Review low-stock variants', 'Prepare replenishment orders'],
    icon: 'Layers'
  },
  {
    id: 'customer-engagement',
    title: 'Customer Engagement & Loyalty',
    short: 'Build customer profiles and encourage repeat purchases.',
    problem: 'Online apparel stores may have customer information but lack a consistent process for follow-up, loyalty rewards and personalized communication.',
    challenges: ['Purchase history is not used effectively', 'Repeat customers are hard to identify', 'Campaigns are too generic', 'Feedback and preferences are scattered'],
    overview: 'A customer engagement workspace to organize customer profiles, segments, loyalty activity and campaign communication.',
    features: ['Customer profiles and purchase notes', 'Customer segmentation', 'Loyalty points and reward rules', 'WhatsApp and SMS campaign drafts', 'Feedback and preference records', 'Repeat-purchase campaign planning'],
    benefits: ['More relevant customer communication', 'Better repeat-customer visibility', 'A structured loyalty program', 'Improved customer relationship management'],
    workflow: ['Maintain customer profiles', 'Group customers by behavior or preferences', 'Create a loyalty or outreach campaign', 'Review engagement and repeat purchases'],
    icon: 'HeartHandshake'
  },
  {
    id: 'promotions',
    title: 'Discounts & Campaigns',
    short: 'Plan collection launches, seasonal sales and coupon campaigns.',
    problem: 'Discount codes, campaign dates and channel messaging can become inconsistent when promotions are planned in separate tools.',
    challenges: ['Campaign dates and terms are unclear', 'Discount codes are hard to coordinate', 'Old offers may remain active', 'Campaign results are not consolidated'],
    overview: 'A promotion planner for managing coupons, sale periods, collection launches and customer communications.',
    features: ['Discount and coupon setup fields', 'Campaign start and end dates', 'Collection-specific promotions', 'WhatsApp and SMS message drafts', 'Campaign calendar and status', 'Performance tracking fields'],
    benefits: ['Better promotion coordination', 'Fewer expired or conflicting offers', 'Consistent customer messaging', 'Clearer campaign planning'],
    workflow: ['Define campaign and discount rules', 'Set validity and eligible products', 'Prepare channel-specific messages', 'Launch and review campaign results'],
    icon: 'Tag'
  }
]

const food: Solution[] = [
  {
    id: 'menu-management',
    title: 'Menu & Catalogue Management',
    short: 'Maintain menu items, categories, prices and availability.',
    problem: 'Food businesses frequently update menus, prices and availability. When information is not synchronized, customers may order unavailable or incorrectly priced items.',
    challenges: ['Menu changes take time to communicate', 'Availability is not updated consistently', 'Add-ons and meal combos are hard to organize', 'Different channels show different details'],
    overview: 'A centralized menu workspace for managing food items, categories, add-ons, combos, prices and availability.',
    features: ['Menu item and category management', 'Variants, add-ons and customization options', 'Meal combo and bundle setup', 'Price and availability controls', 'Menu descriptions and image fields', 'Channel-ready menu data'],
    benefits: ['More accurate menu information', 'Quicker menu updates', 'Easier combo and add-on management', 'A consistent customer ordering experience'],
    workflow: ['Create menu categories and items', 'Configure variants and add-ons', 'Set prices and availability', 'Publish updated menu information'],
    icon: 'Utensils'
  },
  {
    id: 'order-management',
    title: 'Online Order Management',
    short: 'Manage incoming orders and keep each order moving.',
    problem: 'Orders from online channels, phone calls and messaging apps can arrive in different places, making it difficult to prioritize and process them.',
    challenges: ['Orders are scattered across channels', 'Preparation status is not visible', 'Special instructions can be missed', 'Customers need frequent status updates'],
    overview: 'A centralized order board for reviewing orders, assigning preparation status and managing customer updates.',
    features: ['Unified order list and order details', 'New, accepted, preparing and completed statuses', 'Special instructions and item notes', 'Order priority and time fields', 'Customer notification templates', 'Daily order summary'],
    benefits: ['Clearer kitchen and order coordination', 'Fewer missed instructions', 'Faster order status updates', 'Better daily operational visibility'],
    workflow: ['Receive an online order', 'Confirm items and preparation details', 'Update preparation and dispatch status', 'Close the order and review the daily summary'],
    icon: 'ClipboardList'
  },
  {
    id: 'delivery-management',
    title: 'Delivery Management',
    short: 'Coordinate dispatch, delivery assignments and delivery status.',
    problem: 'Without a clear dispatch process, delivery assignments and order handovers can become confusing during busy periods.',
    challenges: ['Delivery assignments are handled informally', 'Dispatch queues are hard to prioritize', 'Delivery status is not visible to staff', 'Failed deliveries need manual follow-up'],
    overview: 'A delivery coordination workspace for preparing dispatches, assigning delivery personnel and tracking delivery progress.',
    features: ['Ready-to-dispatch order queue', 'Delivery assignment and contact details', 'Dispatch time and delivery status', 'Delivery notes and customer address fields', 'Failed delivery and reattempt records', 'Delivery performance summaries'],
    benefits: ['More organized dispatch operations', 'Clearer delivery ownership', 'Faster issue identification', 'Improved customer communication'],
    workflow: ['Move prepared orders to dispatch', 'Assign a delivery person', 'Update picked-up and delivered status', 'Record exceptions and follow-up actions'],
    icon: 'Bike'
  },
  {
    id: 'customer-marketing',
    title: 'Customer Management & Marketing',
    short: 'Understand customers and communicate offers through WhatsApp and SMS.',
    problem: 'Customer details and ordering preferences are often not organized for follow-up, feedback collection or repeat-order campaigns.',
    challenges: ['Customer contact details are scattered', 'Repeat customers are difficult to identify', 'Feedback is not collected consistently', 'Promotions are sent without segmentation'],
    overview: 'A customer engagement solution for maintaining customer records, collecting feedback and planning relevant outreach.',
    features: ['Customer profiles and order history fields', 'Customer groups and segments', 'Feedback and rating records', 'WhatsApp and SMS campaign drafts', 'Repeat-order and win-back campaign planning', 'Customer communication history'],
    benefits: ['More useful customer insights', 'Stronger repeat-order engagement', 'Better feedback visibility', 'More organized promotions'],
    workflow: ['Maintain customer details', 'Review order history and feedback', 'Create a customer segment', 'Prepare and send a relevant campaign'],
    icon: 'Users'
  },
  {
    id: 'food-promotions',
    title: 'Offers & Meal Combos',
    short: 'Create time-bound food offers, meal deals and combo promotions.',
    problem: 'Meal deals and limited-time offers need accurate dates, prices and channel communication to avoid confusion at ordering time.',
    challenges: ['Offer terms are not centrally maintained', 'Combo pricing can be inconsistent', 'Start and end dates are missed', 'Customers may not know about current deals'],
    overview: 'A promotion management workspace for creating meal combos, coupons and limited-time offers with coordinated communication.',
    features: ['Meal combo and bundle definitions', 'Offer price and discount fields', 'Start date, end date and active status', 'WhatsApp and SMS promotional drafts', 'POS or ordering-platform integration-ready records', 'Offer calendar and campaign history'],
    benefits: ['Consistent offer details', 'Easier seasonal and meal-deal planning', 'Better customer awareness', 'Reduced manual coordination'],
    workflow: ['Create the offer or combo', 'Define price, terms and validity', 'Prepare promotional communication', 'Publish to connected ordering channels'],
    icon: 'TicketPercent'
  }
]

export const businesses: Business[] = [
  {
    id: 'supermarket',
    name: 'Supermarket',
    eyebrow: 'Retail operations',
    description: 'Bring inventory, people, customers and promotions together with practical tools designed for supermarket operations.',
    icon: 'ShoppingBasket',
    accent: 'lime',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85',
    solutions: supermarket
  },
  {
    id: 'apparel',
    name: 'Online Apparel',
    eyebrow: 'Fashion commerce',
    description: 'Manage product variants, online orders, customer relationships and campaigns from one organized workspace.',
    icon: 'Shirt',
    accent: 'violet',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85',
    solutions: apparel
  },
  {
    id: 'food',
    name: 'Online Food Business',
    eyebrow: 'Food commerce',
    description: 'Coordinate menus, incoming orders, deliveries and customer engagement for a smoother food business.',
    icon: 'Utensils',
    accent: 'orange',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85',
    solutions: food
  }
]

export function getBusiness(id?: string) {
  return businesses.find((business) => business.id === id)
}

export function getSolution(businessId?: string, solutionId?: string) {
  const business = getBusiness(businessId)
  return business?.solutions.find((solution) => solution.id === solutionId)
}
