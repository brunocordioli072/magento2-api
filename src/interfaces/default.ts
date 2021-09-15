/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ErrorResponse {
  /** Error message */
  message: string;

  /** Errors list */
  errors?: ErrorErrors;

  /** Error code */
  code?: number;

  /** Error parameters list */
  parameters?: ErrorParameters;

  /** Stack trace */
  trace?: string;
}

/**
 * Errors list
 */
export type ErrorErrors = ErrorErrorsItem[];

/**
 * Error details
 */
export interface ErrorErrorsItem {
  /** Error message */
  message?: string;

  /** Error parameters list */
  parameters?: ErrorParameters;
}

/**
 * Error parameters list
 */
export type ErrorParameters = ErrorParametersItem[];

/**
 * Error parameters item
 */
export interface ErrorParametersItem {
  /** ACL resource */
  resources?: string;

  /** Missing or invalid field name */
  fieldName?: string;

  /** Incorrect field value */
  fieldValue?: string;
}

/**
 * Store interface
 */
export interface StoreDataStoreInterface {
  id: number;
  code: string;

  /** Store name */
  name: string;
  website_id: number;
  store_group_id: number;
  is_active: number;

  /** ExtensionInterface class for @see \Magento\Store\Api\Data\StoreInterface */
  extension_attributes?: StoreDataStoreExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Store\Api\Data\StoreInterface
 */
export type StoreDataStoreExtensionInterface = object;

/**
 * Group interface
 */
export interface StoreDataGroupInterface {
  id: number;
  website_id: number;
  root_category_id: number;
  default_store_id: number;
  name: string;

  /** Group code. */
  code: string;

  /** ExtensionInterface class for @see \Magento\Store\Api\Data\GroupInterface */
  extension_attributes?: StoreDataGroupExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Store\Api\Data\GroupInterface
 */
export type StoreDataGroupExtensionInterface = object;

/**
 * Website interface
 */
export interface StoreDataWebsiteInterface {
  id: number;
  code: string;

  /** Website name */
  name: string;
  default_group_id: number;

  /** ExtensionInterface class for @see \Magento\Store\Api\Data\WebsiteInterface */
  extension_attributes?: StoreDataWebsiteExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Store\Api\Data\WebsiteInterface
 */
export type StoreDataWebsiteExtensionInterface = object;

/**
 * Interface for store config
 */
export interface StoreDataStoreConfigInterface {
  /** Store id */
  id: number;

  /** Store code */
  code: string;

  /** Website id of the store */
  website_id: number;

  /** Store locale */
  locale: string;

  /** Base currency code */
  base_currency_code: string;

  /** Default display currency code */
  default_display_currency_code: string;

  /** Timezone of the store */
  timezone: string;

  /** The unit of weight */
  weight_unit: string;

  /** Base URL for the store */
  base_url: string;

  /** Base link URL for the store */
  base_link_url: string;

  /** Base static URL for the store */
  base_static_url: string;

  /** Base media URL for the store */
  base_media_url: string;

  /** Secure base URL for the store */
  secure_base_url: string;

  /** Secure base link URL for the store */
  secure_base_link_url: string;

  /** Secure base static URL for the store */
  secure_base_static_url: string;

  /** Secure base media URL for the store */
  secure_base_media_url: string;

  /** ExtensionInterface class for @see \Magento\Store\Api\Data\StoreConfigInterface */
  extension_attributes?: StoreDataStoreConfigExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Store\Api\Data\StoreConfigInterface
 */
export type StoreDataStoreConfigExtensionInterface = object;

/**
 * Interface SearchResultInterface
 */
export interface FrameworkSearchSearchResultInterface {
  items: FrameworkSearchDocumentInterface[];

  /** Faceted data */
  aggregations: FrameworkSearchAggregationInterface;

  /** Interface SearchCriteriaInterface */
  search_criteria: FrameworkSearchSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Interface \Magento\Framework\Api\Search\DocumentInterface
 */
export interface FrameworkSearchDocumentInterface {
  id: number;

  /** Custom attributes values. */
  custom_attributes?: FrameworkAttributeInterface[];
}

/**
 * Interface for custom attribute value.
 */
export interface FrameworkAttributeInterface {
  /** Attribute code */
  attribute_code: string;

  /** Attribute value */
  value: string;
}

/**
 * Faceted data
 */
export interface FrameworkSearchAggregationInterface {
  /** All Document fields */
  buckets: FrameworkSearchBucketInterface[];

  /** Document field names */
  bucket_names: string[];
}

/**
 * Facet Bucket
 */
export interface FrameworkSearchBucketInterface {
  /** Field name */
  name: string;

  /** Field values */
  values: FrameworkSearchAggregationValueInterface[];
}

/**
 * Interface \Magento\Framework\Api\Search\AggregationValueInterface
 */
export interface FrameworkSearchAggregationValueInterface {
  /** Aggregation */
  value: string;

  /** Metrics */
  metrics: string[];
}

/**
 * Interface SearchCriteriaInterface
 */
export interface FrameworkSearchSearchCriteriaInterface {
  request_name: string;

  /** A list of filter groups. */
  filter_groups: FrameworkSearchFilterGroup[];

  /** Sort order. */
  sort_orders?: FrameworkSortOrder[];

  /** Page size. */
  page_size?: number;

  /** Current page. */
  current_page?: number;
}

/**
 * Groups two or more filters together using a logical OR
 */
export interface FrameworkSearchFilterGroup {
  /** A list of filters in this group */
  filters?: FrameworkFilter[];
}

/**
 * Filter which can be used by any methods from service layer.
 */
export interface FrameworkFilter {
  /** Field */
  field: string;

  /** Value */
  value: string;

  /** Condition type */
  condition_type?: string;
}

/**
 * Data object for sort order.
 */
export interface FrameworkSortOrder {
  /** Sorting field. */
  field: string;

  /** Sorting direction. */
  direction: string;
}

/**
 * Currency Information interface.
 */
export interface DirectoryDataCurrencyInformationInterface {
  /** The base currency code for the store. */
  base_currency_code: string;

  /** The currency symbol of the base currency for the store. */
  base_currency_symbol: string;

  /** The default display currency code for the store. */
  default_display_currency_code: string;

  /** The currency symbol of the default display currency for the store. */
  default_display_currency_symbol: string;

  /** The list of allowed currency codes for the store. */
  available_currency_codes: string[];

  /** The list of exchange rate information for the store. */
  exchange_rates: DirectoryDataExchangeRateInterface[];

  /** ExtensionInterface class for @see \Magento\Directory\Api\Data\CurrencyInformationInterface */
  extension_attributes?: DirectoryDataCurrencyInformationExtensionInterface;
}

/**
 * Exchange Rate interface.
 */
export interface DirectoryDataExchangeRateInterface {
  /** The currency code associated with the exchange rate. */
  currency_to: string;

  /** The exchange rate for the associated currency and the store's base currency. */
  rate: number;

  /** ExtensionInterface class for @see \Magento\Directory\Api\Data\ExchangeRateInterface */
  extension_attributes?: DirectoryDataExchangeRateExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Directory\Api\Data\ExchangeRateInterface
 */
export type DirectoryDataExchangeRateExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\Directory\Api\Data\CurrencyInformationInterface
 */
export type DirectoryDataCurrencyInformationExtensionInterface = object;

/**
 * Country Information interface.
 */
export interface DirectoryDataCountryInformationInterface {
  /** The country id for the store. */
  id: string;

  /** The country 2 letter abbreviation for the store. */
  two_letter_abbreviation: string;

  /** The country 3 letter abbreviation for the store. */
  three_letter_abbreviation: string;

  /** The country full name (in store locale) for the store. */
  full_name_locale: string;

  /** The country full name (in English) for the store. */
  full_name_english: string;

  /** The available regions for the store. */
  available_regions?: DirectoryDataRegionInformationInterface[];

  /** ExtensionInterface class for @see \Magento\Directory\Api\Data\CountryInformationInterface */
  extension_attributes?: DirectoryDataCountryInformationExtensionInterface;
}

/**
 * Region Information interface.
 */
export interface DirectoryDataRegionInformationInterface {
  /** Region id */
  id: string;

  /** Region code */
  code: string;

  /** Region name */
  name: string;

  /** ExtensionInterface class for @see \Magento\Directory\Api\Data\RegionInformationInterface */
  extension_attributes?: DirectoryDataRegionInformationExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Directory\Api\Data\RegionInformationInterface
 */
export type DirectoryDataRegionInformationExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\Directory\Api\Data\CountryInformationInterface
 */
export type DirectoryDataCountryInformationExtensionInterface = object;

/**
 * Interface AttributeSetSearchResultsInterface
 */
export interface EavDataAttributeSetSearchResultsInterface {
  /** Attribute sets list. */
  items: EavDataAttributeSetInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Interface AttributeSetInterface
 */
export interface EavDataAttributeSetInterface {
  /** Attribute set ID */
  attribute_set_id?: number;

  /** Attribute set name */
  attribute_set_name: string;

  /** Attribute set sort order index */
  sort_order: number;

  /** Attribute set entity type id */
  entity_type_id?: number;

  /** ExtensionInterface class for @see \Magento\Eav\Api\Data\AttributeSetInterface */
  extension_attributes?: EavDataAttributeSetExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Eav\Api\Data\AttributeSetInterface
 */
export type EavDataAttributeSetExtensionInterface = object;

/**
 * Search criteria interface.
 */
export interface FrameworkSearchCriteriaInterface {
  /** A list of filter groups. */
  filter_groups: FrameworkSearchFilterGroup[];

  /** Sort order. */
  sort_orders?: FrameworkSortOrder[];

  /** Page size. */
  page_size?: number;

  /** Current page. */
  current_page?: number;
}

/**
 * Customer group interface.
 */
export interface CustomerDataGroupInterface {
  /** Id */
  id?: number;

  /** Code */
  code: string;

  /** Tax class id */
  tax_class_id: number;

  /** Tax class name */
  tax_class_name?: string;

  /** ExtensionInterface class for @see \Magento\Customer\Api\Data\GroupInterface */
  extension_attributes?: CustomerDataGroupExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Customer\Api\Data\GroupInterface
 */
export type CustomerDataGroupExtensionInterface = object;

/**
 * Interface for customer groups search results.
 */
export interface CustomerDataGroupSearchResultsInterface {
  /** Customer groups list. */
  items: CustomerDataGroupInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Customer attribute metadata interface.
 */
export interface CustomerDataAttributeMetadataInterface {
  /** HTML for input element. */
  frontend_input: string;

  /** Template used for input (e.g. "date") */
  input_filter: string;

  /** Label of the store. */
  store_label: string;

  /** Validation rules. */
  validation_rules: CustomerDataValidationRuleInterface[];

  /** Of lines of the attribute value. */
  multiline_count: number;

  /** Attribute is visible on frontend. */
  visible: boolean;

  /** Attribute is required. */
  required: boolean;

  /** Data model for attribute. */
  data_model: string;

  /** Options of the attribute (key => value pairs for select) */
  options: CustomerDataOptionInterface[];

  /** Class which is used to display the attribute on frontend. */
  frontend_class: string;

  /** Current attribute has been defined by a user. */
  user_defined: boolean;

  /** Attributes sort order. */
  sort_order: number;

  /** Label which supposed to be displayed on frontend. */
  frontend_label: string;

  /** The note attribute for the element. */
  note: string;

  /** This is a system attribute. */
  system: boolean;

  /** Backend type. */
  backend_type: string;

  /** It is used in customer grid */
  is_used_in_grid?: boolean;

  /** It is visible in customer grid */
  is_visible_in_grid?: boolean;

  /** It is filterable in customer grid */
  is_filterable_in_grid?: boolean;

  /** It is searchable in customer grid */
  is_searchable_in_grid?: boolean;

  /** Code of the attribute. */
  attribute_code: string;
}

/**
 * Validation rule interface.
 */
export interface CustomerDataValidationRuleInterface {
  /** Validation rule name */
  name: string;

  /** Validation rule value */
  value: string;
}

/**
 * Option interface.
 */
export interface CustomerDataOptionInterface {
  /** Option label */
  label: string;

  /** Option value */
  value?: string;

  /** Nested options */
  options?: CustomerDataOptionInterface[];
}

/**
 * Customer interface.
 */
export interface CustomerDataCustomerInterface {
  /** Customer id */
  id?: number;

  /** Group id */
  group_id?: number;

  /** Default billing address id */
  default_billing?: string;

  /** Default shipping address id */
  default_shipping?: string;

  /** Confirmation */
  confirmation?: string;

  /** Created at time */
  created_at?: string;

  /** Updated at time */
  updated_at?: string;

  /** Created in area */
  created_in?: string;

  /** Date of birth */
  dob?: string;

  /** Email address */
  email: string;

  /** First name */
  firstname: string;

  /** Last name */
  lastname: string;

  /** Middle name */
  middlename?: string;

  /** Prefix */
  prefix?: string;

  /** Suffix */
  suffix?: string;

  /** Gender */
  gender?: number;

  /** Store id */
  store_id?: number;

  /** Tax Vat */
  taxvat?: string;

  /** Website id */
  website_id?: number;

  /** Customer addresses. */
  addresses?: CustomerDataAddressInterface[];

  /** Disable auto group change flag. */
  disable_auto_group_change?: number;

  /** ExtensionInterface class for @see \Magento\Customer\Api\Data\CustomerInterface */
  extension_attributes?: CustomerDataCustomerExtensionInterface;

  /** Custom attributes values. */
  custom_attributes?: FrameworkAttributeInterface[];
}

/**
 * Customer address interface.
 */
export interface CustomerDataAddressInterface {
  /** ID */
  id?: number;

  /** Customer ID */
  customer_id?: number;

  /** Customer address region interface. */
  region?: CustomerDataRegionInterface;

  /** Region ID */
  region_id?: number;

  /** Country code in ISO_3166-2 format */
  country_id?: string;

  /** Street */
  street?: string[];

  /** Company */
  company?: string;

  /** Telephone number */
  telephone?: string;

  /** Fax number */
  fax?: string;

  /** Postcode */
  postcode?: string;

  /** City name */
  city?: string;

  /** First name */
  firstname?: string;

  /** Last name */
  lastname?: string;

  /** Middle name */
  middlename?: string;

  /** Prefix */
  prefix?: string;

  /** Suffix */
  suffix?: string;

  /** Vat id */
  vat_id?: string;

  /** If this address is default shipping address. */
  default_shipping?: boolean;

  /** If this address is default billing address */
  default_billing?: boolean;

  /** ExtensionInterface class for @see \Magento\Customer\Api\Data\AddressInterface */
  extension_attributes?: CustomerDataAddressExtensionInterface;

  /** Custom attributes values. */
  custom_attributes?: FrameworkAttributeInterface[];
}

/**
 * Customer address region interface.
 */
export interface CustomerDataRegionInterface {
  /** Region code */
  region_code: string;

  /** Region */
  region: string;

  /** Region id */
  region_id: number;

  /** ExtensionInterface class for @see \Magento\Customer\Api\Data\RegionInterface */
  extension_attributes?: CustomerDataRegionExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Customer\Api\Data\RegionInterface
 */
export type CustomerDataRegionExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\Customer\Api\Data\AddressInterface
 */
export type CustomerDataAddressExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\Customer\Api\Data\CustomerInterface
 */
export interface CustomerDataCustomerExtensionInterface {
  assistance_allowed?: number;
  is_subscribed?: boolean;
  amazon_id?: string;
  vertex_customer_code?: string;
  vertex_customer_country?: string;
}

/**
 * Interface for customer search results.
 */
export interface CustomerDataCustomerSearchResultsInterface {
  /** Customers list. */
  items: CustomerDataCustomerInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Validation results interface.
 */
export interface CustomerDataValidationResultsInterface {
  /** If the provided data is valid. */
  valid: boolean;

  /** Error messages as array in case of validation failure, else return empty array. */
  messages: string[];
}

/**
 * CMS page interface.
 */
export interface CmsDataPageInterface {
  /** ID */
  id?: number;

  /** Identifier */
  identifier: string;

  /** Title */
  title?: string;

  /** Page layout */
  page_layout?: string;

  /** Meta title */
  meta_title?: string;

  /** Meta keywords */
  meta_keywords?: string;

  /** Meta description */
  meta_description?: string;

  /** Content heading */
  content_heading?: string;

  /** Content */
  content?: string;

  /** Creation time */
  creation_time?: string;

  /** Update time */
  update_time?: string;

  /** Sort order */
  sort_order?: string;

  /** Layout update xml */
  layout_update_xml?: string;

  /** Custom theme */
  custom_theme?: string;

  /** Custom root template */
  custom_root_template?: string;

  /** Custom layout update xml */
  custom_layout_update_xml?: string;

  /** Custom theme from */
  custom_theme_from?: string;

  /** Custom theme to */
  custom_theme_to?: string;

  /** Active */
  active?: boolean;
}

/**
 * Interface for cms page search results.
 */
export interface CmsDataPageSearchResultsInterface {
  /** Pages list. */
  items: CmsDataPageInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * CMS block interface.
 */
export interface CmsDataBlockInterface {
  /** ID */
  id?: number;

  /** Identifier */
  identifier: string;

  /** Title */
  title?: string;

  /** Content */
  content?: string;

  /** Creation time */
  creation_time?: string;

  /** Update time */
  update_time?: string;

  /** Active */
  active?: boolean;
}

/**
 * Interface for cms block search results.
 */
export interface CmsDataBlockSearchResultsInterface {
  /** Blocks list. */
  items: CmsDataBlockInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

export interface CatalogDataProductInterface {
  /** Id */
  id?: number;

  /** Sku */
  sku: string;

  /** Name */
  name?: string;

  /** Attribute set id */
  attribute_set_id?: number;

  /** Price */
  price?: number;

  /** Status */
  status?: number;

  /** Visibility */
  visibility?: number;

  /** Type id */
  type_id?: string;

  /** Created date */
  created_at?: string;

  /** Updated date */
  updated_at?: string;

  /** Weight */
  weight?: number;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductInterface */
  extension_attributes?: CatalogDataProductExtensionInterface;

  /** Product links info */
  product_links?: CatalogDataProductLinkInterface[];

  /** List of product options */
  options?: CatalogDataProductCustomOptionInterface[];

  /** Media gallery entries */
  media_gallery_entries?: CatalogDataProductAttributeMediaGalleryEntryInterface[];

  /** List of product tier prices */
  tier_prices?: CatalogDataProductTierPriceInterface[];

  /** Custom attributes values. */
  custom_attributes?: FrameworkAttributeInterface[];
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductInterface
 */
export interface CatalogDataProductExtensionInterface {
  website_ids?: number[];
  category_links?: CatalogDataCategoryLinkInterface[];

  /** Interface StockItem */
  stock_item?: CatalogInventoryDataStockItemInterface;
  bundle_product_options?: BundleDataOptionInterface[];
  downloadable_product_links?: DownloadableDataLinkInterface[];
  downloadable_product_samples?: DownloadableDataSampleInterface[];
  configurable_product_options?: ConfigurableProductDataOptionInterface[];
  configurable_product_links?: number[];

  /** Data model representing a Commmodity Code */
  vertex_commodity_code?: VertexTaxDataCommodityCodeInterface;
}

export interface CatalogDataCategoryLinkInterface {
  position?: number;

  /** Category id */
  category_id: string;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\CategoryLinkInterface */
  extension_attributes?: CatalogDataCategoryLinkExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\CategoryLinkInterface
 */
export type CatalogDataCategoryLinkExtensionInterface = object;

/**
 * Interface StockItem
 */
export interface CatalogInventoryDataStockItemInterface {
  item_id?: number;
  product_id?: number;

  /** Stock identifier */
  stock_id?: number;
  qty: number;

  /** Stock Availability */
  is_in_stock: boolean;
  is_qty_decimal: boolean;
  show_default_notification_message: boolean;
  use_config_min_qty: boolean;

  /** Minimal quantity available for item status in stock */
  min_qty: number;
  use_config_min_sale_qty: number;

  /** Minimum Qty Allowed in Shopping Cart or NULL when there is no limitation */
  min_sale_qty: number;
  use_config_max_sale_qty: boolean;

  /** Maximum Qty Allowed in Shopping Cart data wrapper */
  max_sale_qty: number;
  use_config_backorders: boolean;

  /** Backorders status */
  backorders: number;
  use_config_notify_stock_qty: boolean;

  /** Notify for Quantity Below data wrapper */
  notify_stock_qty: number;
  use_config_qty_increments: boolean;

  /** Quantity Increments data wrapper */
  qty_increments: number;
  use_config_enable_qty_inc: boolean;

  /** Whether Quantity Increments is enabled */
  enable_qty_increments: boolean;
  use_config_manage_stock: boolean;

  /** Can Manage Stock */
  manage_stock: boolean;
  low_stock_date: string;
  is_decimal_divided: boolean;
  stock_status_changed_auto: number;

  /** ExtensionInterface class for @see \Magento\CatalogInventory\Api\Data\StockItemInterface */
  extension_attributes?: CatalogInventoryDataStockItemExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\CatalogInventory\Api\Data\StockItemInterface
 */
export type CatalogInventoryDataStockItemExtensionInterface = object;

/**
 * Interface OptionInterface
 */
export interface BundleDataOptionInterface {
  /** Option id */
  option_id?: number;

  /** Option title */
  title?: string;

  /** Is required option */
  required?: boolean;

  /** Input type */
  type?: string;

  /** Option position */
  position?: number;

  /** Product sku */
  sku?: string;

  /** Product links */
  product_links?: BundleDataLinkInterface[];

  /** ExtensionInterface class for @see \Magento\Bundle\Api\Data\OptionInterface */
  extension_attributes?: BundleDataOptionExtensionInterface;
}

/**
 * Interface LinkInterface
 */
export interface BundleDataLinkInterface {
  /** The identifier */
  id?: string;

  /** Linked product sku */
  sku?: string;

  /** Option id */
  option_id?: number;

  /** Qty */
  qty?: number;

  /** Position */
  position?: number;

  /** Is default */
  is_default: boolean;

  /** Price */
  price: number;

  /** Price type */
  price_type: number;

  /** Whether quantity could be changed */
  can_change_quantity?: number;

  /** ExtensionInterface class for @see \Magento\Bundle\Api\Data\LinkInterface */
  extension_attributes?: BundleDataLinkExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Bundle\Api\Data\LinkInterface
 */
export type BundleDataLinkExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\Bundle\Api\Data\OptionInterface
 */
export type BundleDataOptionExtensionInterface = object;

export interface DownloadableDataLinkInterface {
  /** Sample(or link) id */
  id?: number;
  title?: string;
  sort_order: number;

  /** Shareable status */
  is_shareable: number;

  /** Price */
  price: number;

  /** Of downloads per user */
  number_of_downloads?: number;
  link_type: string;

  /** relative file path */
  link_file?: string;
  link_file_content?: DownloadableDataFileContentInterface;

  /** Link url or null when type is 'file' */
  link_url?: string;
  sample_type: string;

  /** relative file path */
  sample_file?: string;
  sample_file_content?: DownloadableDataFileContentInterface;

  /** file URL */
  sample_url?: string;

  /** ExtensionInterface class for @see \Magento\Downloadable\Api\Data\LinkInterface */
  extension_attributes?: DownloadableDataLinkExtensionInterface;
}

export interface DownloadableDataFileContentInterface {
  /** Data (base64 encoded content) */
  file_data: string;

  /** File name */
  name: string;

  /** ExtensionInterface class for @see \Magento\Downloadable\Api\Data\File\ContentInterface */
  extension_attributes?: DownloadableDataFileContentExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Downloadable\Api\Data\File\ContentInterface
 */
export type DownloadableDataFileContentExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\Downloadable\Api\Data\LinkInterface
 */
export type DownloadableDataLinkExtensionInterface = object;

export interface DownloadableDataSampleInterface {
  /** Sample(or link) id */
  id?: number;

  /** Title */
  title: string;

  /** Order index for sample */
  sort_order: number;
  sample_type: string;

  /** relative file path */
  sample_file?: string;
  sample_file_content?: DownloadableDataFileContentInterface;

  /** file URL */
  sample_url?: string;

  /** ExtensionInterface class for @see \Magento\Downloadable\Api\Data\SampleInterface */
  extension_attributes?: DownloadableDataSampleExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Downloadable\Api\Data\SampleInterface
 */
export type DownloadableDataSampleExtensionInterface = object;

/**
 * Interface OptionInterface
 */
export interface ConfigurableProductDataOptionInterface {
  id?: number;
  attribute_id?: string;
  label?: string;
  position?: number;
  is_use_default?: boolean;
  values?: ConfigurableProductDataOptionValueInterface[];

  /** ExtensionInterface class for @see \Magento\ConfigurableProduct\Api\Data\OptionInterface */
  extension_attributes?: ConfigurableProductDataOptionExtensionInterface;
  product_id?: number;
}

/**
 * Interface OptionValueInterface
 */
export interface ConfigurableProductDataOptionValueInterface {
  value_index: number;

  /** ExtensionInterface class for @see \Magento\ConfigurableProduct\Api\Data\OptionValueInterface */
  extension_attributes?: ConfigurableProductDataOptionValueExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\ConfigurableProduct\Api\Data\OptionValueInterface
 */
export type ConfigurableProductDataOptionValueExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\ConfigurableProduct\Api\Data\OptionInterface
 */
export type ConfigurableProductDataOptionExtensionInterface = object;

/**
 * Data model representing a Commmodity Code
 */
export interface VertexTaxDataCommodityCodeInterface {
  /** Commodity code */
  code?: string;

  /** Commodity code type */
  type?: string;
}

export interface CatalogDataProductLinkInterface {
  /** SKU */
  sku: string;

  /** Link type */
  link_type: string;

  /** Linked product sku */
  linked_product_sku: string;

  /** Linked product type (simple, virtual, etc) */
  linked_product_type: string;

  /** Linked item position */
  position: number;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductLinkInterface */
  extension_attributes?: CatalogDataProductLinkExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductLinkInterface
 */
export interface CatalogDataProductLinkExtensionInterface {
  qty?: number;
}

export interface CatalogDataProductCustomOptionInterface {
  /** Product SKU */
  product_sku: string;

  /** Option id */
  option_id?: number;

  /** Option title */
  title: string;

  /** Option type */
  type: string;

  /** Sort order */
  sort_order: number;

  /** Is require */
  is_require: boolean;

  /** Price */
  price?: number;

  /** Price type */
  price_type?: string;

  /** Sku */
  sku?: string;
  file_extension?: string;
  max_characters?: number;
  image_size_x?: number;
  image_size_y?: number;
  values?: CatalogDataProductCustomOptionValuesInterface[];

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductCustomOptionInterface */
  extension_attributes?: CatalogDataProductCustomOptionExtensionInterface;
}

export interface CatalogDataProductCustomOptionValuesInterface {
  /** Option title */
  title: string;

  /** Sort order */
  sort_order: number;

  /** Price */
  price: number;

  /** Price type */
  price_type: string;

  /** Sku */
  sku?: string;

  /** Option type id */
  option_type_id?: number;
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductCustomOptionInterface
 */
export interface CatalogDataProductCustomOptionExtensionInterface {
  vertex_flex_field?: string;
}

export interface CatalogDataProductAttributeMediaGalleryEntryInterface {
  /** Gallery entry ID */
  id?: number;

  /** Media type */
  media_type: string;

  /** Gallery entry alternative text */
  label: string;

  /** Gallery entry position (sort order) */
  position: number;

  /** If gallery entry is hidden from product page */
  disabled: boolean;

  /** Gallery entry image types (thumbnail, image, small_image etc) */
  types: string[];

  /** File path */
  file?: string;

  /** Image Content data interface */
  content?: FrameworkDataImageContentInterface;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductAttributeMediaGalleryEntryInterface */
  extension_attributes?: CatalogDataProductAttributeMediaGalleryEntryExtensionInterface;
}

/**
 * Image Content data interface
 */
export interface FrameworkDataImageContentInterface {
  /** Media data (base64 encoded content) */
  base64_encoded_data: string;

  /** MIME type */
  type: string;

  /** Image name */
  name: string;
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductAttributeMediaGalleryEntryInterface
 */
export interface CatalogDataProductAttributeMediaGalleryEntryExtensionInterface {
  /** Video Content data interface */
  video_content?: FrameworkDataVideoContentInterface;
}

/**
 * Video Content data interface
 */
export interface FrameworkDataVideoContentInterface {
  /** MIME type */
  media_type: string;

  /** Provider */
  video_provider: string;

  /** Video URL */
  video_url: string;

  /** Title */
  video_title: string;

  /** Video Description */
  video_description: string;

  /** Metadata */
  video_metadata: string;
}

export interface CatalogDataProductTierPriceInterface {
  /** Customer group id */
  customer_group_id: number;

  /** Tier qty */
  qty: number;

  /** Price value */
  value: number;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductTierPriceInterface */
  extension_attributes?: CatalogDataProductTierPriceExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductTierPriceInterface
 */
export interface CatalogDataProductTierPriceExtensionInterface {
  percentage_value?: number;
  website_id?: number;
}

export interface CatalogDataProductSearchResultsInterface {
  /** Attributes list. */
  items: CatalogDataProductInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

export interface CatalogDataProductAttributeTypeInterface {
  /** Value */
  value: string;

  /** Type label */
  label: string;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductAttributeTypeInterface */
  extension_attributes?: CatalogDataProductAttributeTypeExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductAttributeTypeInterface
 */
export type CatalogDataProductAttributeTypeExtensionInterface = object;

export interface CatalogDataProductAttributeInterface {
  /** ExtensionInterface class for @see \Magento\Eav\Api\Data\AttributeInterface */
  extension_attributes?: EavDataAttributeExtensionInterface;

  /** WYSIWYG flag */
  is_wysiwyg_enabled?: boolean;

  /** The HTML tags are allowed on the frontend */
  is_html_allowed_on_front?: boolean;

  /** It is used for sorting in product listing */
  used_for_sort_by?: boolean;

  /** It used in layered navigation */
  is_filterable?: boolean;

  /** It is used in search results layered navigation */
  is_filterable_in_search?: boolean;

  /** It is used in catalog product grid */
  is_used_in_grid?: boolean;

  /** It is visible in catalog product grid */
  is_visible_in_grid?: boolean;

  /** It is filterable in catalog product grid */
  is_filterable_in_grid?: boolean;

  /** Position */
  position?: number;

  /** Apply to value for the element */
  apply_to?: string[];

  /** The attribute can be used in Quick Search */
  is_searchable?: string;

  /** The attribute can be used in Advanced Search */
  is_visible_in_advanced_search?: string;

  /** The attribute can be compared on the frontend */
  is_comparable?: string;

  /** The attribute can be used for promo rules */
  is_used_for_promo_rules?: string;

  /** The attribute is visible on the frontend */
  is_visible_on_front?: string;

  /** The attribute can be used in product listing */
  used_in_product_listing?: string;

  /** Attribute is visible on frontend. */
  is_visible?: boolean;

  /** Attribute scope */
  scope?: string;

  /** Id of the attribute. */
  attribute_id?: number;

  /** Code of the attribute. */
  attribute_code: string;

  /** HTML for input element. */
  frontend_input: string;

  /** Entity type id */
  entity_type_id: string;

  /** Attribute is required. */
  is_required: boolean;

  /** Options of the attribute (key => value pairs for select) */
  options?: EavDataAttributeOptionInterface[];

  /** Current attribute has been defined by a user. */
  is_user_defined?: boolean;

  /** Frontend label for default store */
  default_frontend_label?: string;

  /** Frontend label for each store */
  frontend_labels: EavDataAttributeFrontendLabelInterface[];

  /** The note attribute for the element. */
  note?: string;

  /** Backend type. */
  backend_type?: string;

  /** Backend model */
  backend_model?: string;

  /** Source model */
  source_model?: string;

  /** Default value for the element. */
  default_value?: string;

  /** This is a unique attribute */
  is_unique?: string;

  /** Frontend class of attribute */
  frontend_class?: string;

  /** Validation rules. */
  validation_rules?: EavDataAttributeValidationRuleInterface[];

  /** Custom attributes values. */
  custom_attributes?: FrameworkAttributeInterface[];
}

/**
 * ExtensionInterface class for @see \Magento\Eav\Api\Data\AttributeInterface
 */
export type EavDataAttributeExtensionInterface = object;

/**
 * Created from:
 */
export interface EavDataAttributeOptionInterface {
  /** Option label */
  label: string;

  /** Option value */
  value: string;

  /** Option order */
  sort_order?: number;

  /** Default */
  is_default?: boolean;

  /** Option label for store scopes */
  store_labels?: EavDataAttributeOptionLabelInterface[];
}

/**
 * Interface AttributeOptionLabelInterface
 */
export interface EavDataAttributeOptionLabelInterface {
  /** Store id */
  store_id?: number;

  /** Option label */
  label?: string;
}

/**
 * Interface AttributeFrontendLabelInterface
 */
export interface EavDataAttributeFrontendLabelInterface {
  /** Store id */
  store_id?: number;

  /** Option label */
  label?: string;
}

/**
 * Interface AttributeValidationRuleInterface
 */
export interface EavDataAttributeValidationRuleInterface {
  /** Object key */
  key: string;

  /** Object value */
  value: string;
}

export interface CatalogDataProductAttributeSearchResultsInterface {
  /** Attributes list. */
  items: CatalogDataProductAttributeInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

export interface CatalogDataCategoryAttributeInterface {
  /** WYSIWYG flag */
  is_wysiwyg_enabled?: boolean;

  /** The HTML tags are allowed on the frontend */
  is_html_allowed_on_front?: boolean;

  /** It is used for sorting in product listing */
  used_for_sort_by?: boolean;

  /** It used in layered navigation */
  is_filterable?: boolean;

  /** It is used in search results layered navigation */
  is_filterable_in_search?: boolean;

  /** It is used in catalog product grid */
  is_used_in_grid?: boolean;

  /** It is visible in catalog product grid */
  is_visible_in_grid?: boolean;

  /** It is filterable in catalog product grid */
  is_filterable_in_grid?: boolean;

  /** Position */
  position?: number;

  /** Apply to value for the element */
  apply_to?: string[];

  /** The attribute can be used in Quick Search */
  is_searchable?: string;

  /** The attribute can be used in Advanced Search */
  is_visible_in_advanced_search?: string;

  /** The attribute can be compared on the frontend */
  is_comparable?: string;

  /** The attribute can be used for promo rules */
  is_used_for_promo_rules?: string;

  /** The attribute is visible on the frontend */
  is_visible_on_front?: string;

  /** The attribute can be used in product listing */
  used_in_product_listing?: string;

  /** Attribute is visible on frontend. */
  is_visible?: boolean;

  /** Attribute scope */
  scope?: string;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\EavAttributeInterface */
  extension_attributes?: CatalogDataEavAttributeExtensionInterface;

  /** Id of the attribute. */
  attribute_id?: number;

  /** Code of the attribute. */
  attribute_code: string;

  /** HTML for input element. */
  frontend_input: string;

  /** Entity type id */
  entity_type_id: string;

  /** Attribute is required. */
  is_required: boolean;

  /** Options of the attribute (key => value pairs for select) */
  options?: EavDataAttributeOptionInterface[];

  /** Current attribute has been defined by a user. */
  is_user_defined?: boolean;

  /** Frontend label for default store */
  default_frontend_label?: string;

  /** Frontend label for each store */
  frontend_labels: EavDataAttributeFrontendLabelInterface[];

  /** The note attribute for the element. */
  note?: string;

  /** Backend type. */
  backend_type?: string;

  /** Backend model */
  backend_model?: string;

  /** Source model */
  source_model?: string;

  /** Default value for the element. */
  default_value?: string;

  /** This is a unique attribute */
  is_unique?: string;

  /** Frontend class of attribute */
  frontend_class?: string;

  /** Validation rules. */
  validation_rules?: EavDataAttributeValidationRuleInterface[];

  /** Custom attributes values. */
  custom_attributes?: FrameworkAttributeInterface[];
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\EavAttributeInterface
 */
export type CatalogDataEavAttributeExtensionInterface = object;

export interface CatalogDataCategoryAttributeSearchResultsInterface {
  /** Attributes list. */
  items: CatalogDataCategoryAttributeInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Product type details
 */
export interface CatalogDataProductTypeInterface {
  /** Product type code */
  name: string;

  /** Product type label */
  label: string;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductTypeInterface */
  extension_attributes?: CatalogDataProductTypeExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductTypeInterface
 */
export type CatalogDataProductTypeExtensionInterface = object;

/**
 * Interface AttributeGroupSearchResultsInterface
 */
export interface EavDataAttributeGroupSearchResultsInterface {
  /** Attribute sets list. */
  items: EavDataAttributeGroupInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Interface AttributeGroupInterface
 */
export interface EavDataAttributeGroupInterface {
  /** Id */
  attribute_group_id?: string;

  /** Name */
  attribute_group_name?: string;

  /** Attribute set id */
  attribute_set_id?: number;

  /** ExtensionInterface class for @see \Magento\Eav\Api\Data\AttributeGroupInterface */
  extension_attributes?: EavDataAttributeGroupExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Eav\Api\Data\AttributeGroupInterface
 */
export interface EavDataAttributeGroupExtensionInterface {
  attribute_group_code?: string;
  sort_order?: string;
}

/**
 * Tier price interface.
 */
export interface CatalogDataTierPriceInterface {
  /** Tier price. */
  price: number;

  /** Tier price type. */
  price_type: string;

  /** Website id. */
  website_id: number;

  /** SKU. */
  sku: string;

  /** Customer group. */
  customer_group: string;

  /** Quantity. */
  quantity: number;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\TierPriceInterface */
  extension_attributes?: CatalogDataTierPriceExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\TierPriceInterface
 */
export type CatalogDataTierPriceExtensionInterface = object;

/**
 * Interface returned in case of incorrect price passed to efficient price API.
 */
export interface CatalogDataPriceUpdateResultInterface {
  /** Error message, that contains description of error occurred during price update. */
  message: string;

  /** Parameters, that could be displayed in error message placeholders. */
  parameters: string[];

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\PriceUpdateResultInterface */
  extension_attributes?: CatalogDataPriceUpdateResultExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\PriceUpdateResultInterface
 */
export type CatalogDataPriceUpdateResultExtensionInterface = object;

/**
 * Price interface.
 */
export interface CatalogDataBasePriceInterface {
  /** Price. */
  price: number;

  /** Store id. */
  store_id: number;

  /** SKU. */
  sku: string;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\BasePriceInterface */
  extension_attributes?: CatalogDataBasePriceExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\BasePriceInterface
 */
export type CatalogDataBasePriceExtensionInterface = object;

/**
 * Cost interface.
 */
export interface CatalogDataCostInterface {
  /** Cost value. */
  cost: number;

  /** Store id. */
  store_id: number;

  /** SKU. */
  sku: string;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\CostInterface */
  extension_attributes?: CatalogDataCostExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\CostInterface
 */
export type CatalogDataCostExtensionInterface = object;

/**
 * Product Special Price Interface is used to encapsulate data that can be processed by efficient price API.
 */
export interface CatalogDataSpecialPriceInterface {
  /** Product special price value. */
  price: number;

  /** ID of store, that contains special price value. */
  store_id: number;

  /** SKU of product, that contains special price value. */
  sku: string;

  /** Start date for special price in Y-m-d H:i:s format. */
  price_from: string;

  /** End date for special price in Y-m-d H:i:s format. */
  price_to: string;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\SpecialPriceInterface */
  extension_attributes?: CatalogDataSpecialPriceExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\SpecialPriceInterface
 */
export type CatalogDataSpecialPriceExtensionInterface = object;

/**
 * Category data interface.
 */
export interface CatalogDataCategoryInterface {
  /** Category id. */
  id?: number;

  /** Parent category ID */
  parent_id?: number;

  /** Category name */
  name?: string;

  /** Whether category is active */
  is_active?: boolean;

  /** Category position */
  position?: number;

  /** Category level */
  level?: number;

  /** Children ids comma separated. */
  children?: string;

  /** Category creation date and time. */
  created_at?: string;

  /** Category last update date and time. */
  updated_at?: string;

  /** Category full path. */
  path?: string;

  /** Available sort by for category. */
  available_sort_by?: string[];

  /** Category is included in menu. */
  include_in_menu?: boolean;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\CategoryInterface */
  extension_attributes?: CatalogDataCategoryExtensionInterface;

  /** Custom attributes values. */
  custom_attributes?: FrameworkAttributeInterface[];
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\CategoryInterface
 */
export type CatalogDataCategoryExtensionInterface = object;

export interface CatalogDataCategoryTreeInterface {
  id?: number;

  /** Parent category ID */
  parent_id: number;

  /** Category name */
  name: string;

  /** Whether category is active */
  is_active: boolean;

  /** Category position */
  position: number;

  /** Category level */
  level: number;

  /** Product count */
  product_count: number;
  children_data: CatalogDataCategoryTreeInterface[];
}

export interface CatalogDataCategorySearchResultsInterface {
  /** Categories */
  items: CatalogDataCategoryInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

export interface CatalogDataProductCustomOptionTypeInterface {
  /** Option type label */
  label: string;

  /** Option type code */
  code: string;

  /** Option type group */
  group: string;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductCustomOptionTypeInterface */
  extension_attributes?: CatalogDataProductCustomOptionTypeExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductCustomOptionTypeInterface
 */
export type CatalogDataProductCustomOptionTypeExtensionInterface = object;

export interface CatalogDataProductLinkTypeInterface {
  /** Link type code */
  code: number;

  /** Link type name */
  name: string;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductLinkTypeInterface */
  extension_attributes?: CatalogDataProductLinkTypeExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductLinkTypeInterface
 */
export type CatalogDataProductLinkTypeExtensionInterface = object;

export interface CatalogDataProductLinkAttributeInterface {
  /** Attribute code */
  code: string;

  /** Attribute type */
  type: string;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductLinkAttributeInterface */
  extension_attributes?: CatalogDataProductLinkAttributeExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductLinkAttributeInterface
 */
export type CatalogDataProductLinkAttributeExtensionInterface = object;

export interface CatalogDataCategoryProductLinkInterface {
  sku?: string;
  position?: number;

  /** Category id */
  category_id: string;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\CategoryProductLinkInterface */
  extension_attributes?: CatalogDataCategoryProductLinkExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\CategoryProductLinkInterface
 */
export type CatalogDataCategoryProductLinkExtensionInterface = object;

export interface CatalogDataProductWebsiteLinkInterface {
  sku: string;

  /** Website ids */
  website_id: number;
}

/**
 * Dto that holds render information about products
 */
export interface CatalogDataProductRenderSearchResultsInterface {
  /** List of products rendered information */
  items: CatalogDataProductRenderInterface[];
}

/**
 * Represents Data Object which holds enough information to render product This information is put into part as Add To Cart or Add to Compare Data or Price Data
 */
export interface CatalogDataProductRenderInterface {
  /** Button interface. This interface represents all manner of product buttons: add to cart, add to compare, etc... The buttons describes by this interface should have interaction with backend */
  add_to_cart_button: CatalogDataProductRenderButtonInterface;

  /** Button interface. This interface represents all manner of product buttons: add to cart, add to compare, etc... The buttons describes by this interface should have interaction with backend */
  add_to_compare_button: CatalogDataProductRenderButtonInterface;

  /** Price interface. */
  price_info: CatalogDataProductRenderPriceInfoInterface;

  /** Enough information, that needed to render image on front */
  images: CatalogDataProductRenderImageInterface[];

  /** Product url */
  url: string;

  /** Product identifier */
  id: number;

  /** Product name */
  name: string;

  /** Product type. Such as bundle, grouped, simple, etc... */
  type: string;

  /** Information about product saleability (In Stock) */
  is_salable: string;

  /** Information about current store id or requested store id */
  store_id: number;

  /** Current or desired currency code to product */
  currency_code: string;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRenderInterface */
  extension_attributes: CatalogDataProductRenderExtensionInterface;
}

/**
 * Button interface. This interface represents all manner of product buttons: add to cart, add to compare, etc... The buttons describes by this interface should have interaction with backend
 */
export interface CatalogDataProductRenderButtonInterface {
  /** Post data */
  post_data: string;

  /** Url, needed to add product to cart */
  url: string;

  /** Flag whether a product has options or not */
  required_options: boolean;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\ButtonInterface */
  extension_attributes?: CatalogDataProductRenderButtonExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\ButtonInterface
 */
export type CatalogDataProductRenderButtonExtensionInterface = object;

/**
 * Price interface.
 */
export interface CatalogDataProductRenderPriceInfoInterface {
  /** Final price */
  final_price: number;

  /** Max price of a product */
  max_price: number;

  /** Max regular price */
  max_regular_price: number;

  /** Minimal regular price */
  minimal_regular_price: number;

  /** Special price */
  special_price: number;

  /** Minimal price */
  minimal_price: number;

  /** Regular price */
  regular_price: number;

  /** Formatted Price interface. Aggregate formatted html with price representations. E.g.: <span class="price">$9.00</span> Consider currency, rounding and html */
  formatted_prices: CatalogDataProductRenderFormattedPriceInfoInterface;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\PriceInfoInterface */
  extension_attributes?: CatalogDataProductRenderPriceInfoExtensionInterface;
}

/**
 * Formatted Price interface. Aggregate formatted html with price representations. E.g.: <span class="price">$9.00</span> Consider currency, rounding and html
 */
export interface CatalogDataProductRenderFormattedPriceInfoInterface {
  /** Html with final price */
  final_price: string;

  /** Max price of a product */
  max_price: string;

  /** The minimal price of the product or variation */
  minimal_price: string;

  /** Max regular price */
  max_regular_price: string;

  /** Minimal regular price */
  minimal_regular_price: string;

  /** Special price */
  special_price: string;

  /** Price - is price of product without discounts and special price with taxes and fixed product tax */
  regular_price: string;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\FormattedPriceInfoInterface */
  extension_attributes?: CatalogDataProductRenderFormattedPriceInfoExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\FormattedPriceInfoInterface
 */
export type CatalogDataProductRenderFormattedPriceInfoExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\PriceInfoInterface
 */
export interface CatalogDataProductRenderPriceInfoExtensionInterface {
  /** Price interface. */
  msrp?: MsrpDataProductRenderMsrpPriceInfoInterface;

  /** Price interface. */
  tax_adjustments?: CatalogDataProductRenderPriceInfoInterface;
  weee_attributes?: WeeeDataProductRenderWeeeAdjustmentAttributeInterface[];
  weee_adjustment?: string;
}

/**
 * Price interface.
 */
export interface MsrpDataProductRenderMsrpPriceInfoInterface {
  msrp_price: string;
  is_applicable: string;
  is_shown_price_on_gesture: string;
  msrp_message: string;
  explanation_message: string;

  /** ExtensionInterface class for @see \Magento\Msrp\Api\Data\ProductRender\MsrpPriceInfoInterface */
  extension_attributes?: MsrpDataProductRenderMsrpPriceInfoExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Msrp\Api\Data\ProductRender\MsrpPriceInfoInterface
 */
export type MsrpDataProductRenderMsrpPriceInfoExtensionInterface = object;

/**
 * List of all weee attributes, their amounts, etc.., that product has
 */
export interface WeeeDataProductRenderWeeeAdjustmentAttributeInterface {
  /** Weee attribute amount */
  amount: string;

  /** Tax which is calculated to fixed product tax attribute */
  tax_amount: string;

  /** Tax amount of weee attribute */
  tax_amount_incl_tax: string;

  /** Product amount exclude tax */
  amount_excl_tax: string;

  /** Weee attribute code */
  attribute_code: string;

  /** ExtensionInterface class for @see \Magento\Weee\Api\Data\ProductRender\WeeeAdjustmentAttributeInterface */
  extension_attributes: WeeeDataProductRenderWeeeAdjustmentAttributeExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Weee\Api\Data\ProductRender\WeeeAdjustmentAttributeInterface
 */
export type WeeeDataProductRenderWeeeAdjustmentAttributeExtensionInterface = object;

/**
 * Product Render image interface. Represents physical characteristics of image, that can be used in product listing or product view
 */
export interface CatalogDataProductRenderImageInterface {
  /** Image url */
  url: string;

  /** Image code */
  code: string;

  /** Image height */
  height: number;

  /** Image width in px */
  width: number;

  /** Image label */
  label: string;

  /** Resize width */
  resized_width: number;

  /** Resize height */
  resized_height: number;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\ImageInterface */
  extension_attributes?: CatalogDataProductRenderImageExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\ImageInterface
 */
export type CatalogDataProductRenderImageExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRenderInterface
 */
export interface CatalogDataProductRenderExtensionInterface {
  review_html?: string;

  /** Button interface. This interface represents all manner of product buttons: add to cart, add to compare, etc... The buttons describes by this interface should have interaction with backend */
  wishlist_button?: CatalogDataProductRenderButtonInterface;
  ddg_brand?: string;
  ddg_description?: string;
  ddg_sku?: string;
  ddg_image?: string;
  ddg_categories?: string[];
}

/**
 * Interface StockItemCollectionInterface
 */
export interface CatalogInventoryDataStockItemCollectionInterface {
  /** Items */
  items: CatalogInventoryDataStockItemInterface[];

  /** Interface StockItemCriteriaInterface */
  search_criteria: CatalogInventoryStockItemCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Interface StockItemCriteriaInterface
 */
export interface CatalogInventoryStockItemCriteriaInterface {
  /** Associated Mapper Interface name */
  mapper_interface_name: string;

  /** Criteria objects added to current Composite Criteria */
  criteria_list: FrameworkCriteriaInterface[];

  /** List of filters */
  filters: string[];

  /** Ordering criteria */
  orders: string[];

  /** Limit */
  limit: string[];
}

/**
 * Interface CriteriaInterface
 */
export interface FrameworkCriteriaInterface {
  /** Associated Mapper Interface name */
  mapper_interface_name: string;

  /** Criteria objects added to current Composite Criteria */
  criteria_list: FrameworkCriteriaInterface[];

  /** List of filters */
  filters: string[];

  /** Ordering criteria */
  orders: string[];

  /** Limit */
  limit: string[];
}

/**
 * Interface StockStatusInterface
 */
export interface CatalogInventoryDataStockStatusInterface {
  product_id: number;
  stock_id: number;
  qty: number;
  stock_status: number;

  /** Interface StockItem */
  stock_item: CatalogInventoryDataStockItemInterface;

  /** ExtensionInterface class for @see \Magento\CatalogInventory\Api\Data\StockStatusInterface */
  extension_attributes?: CatalogInventoryDataStockStatusExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\CatalogInventory\Api\Data\StockStatusInterface
 */
export type CatalogInventoryDataStockStatusExtensionInterface = object;

/**
 * Interface CartInterface
 */
export interface QuoteDataCartInterface {
  /** Cart/quote ID. */
  id: number;

  /** Cart creation date and time. Otherwise, null. */
  created_at?: string;

  /** Cart last update date and time. Otherwise, null. */
  updated_at?: string;

  /** Cart conversion date and time. Otherwise, null. */
  converted_at?: string;

  /** Active status flag value. Otherwise, null. */
  is_active?: boolean;

  /** Virtual flag value. Otherwise, null. */
  is_virtual?: boolean;

  /** Array of items. Otherwise, null. */
  items?: QuoteDataCartItemInterface[];

  /** Number of different items or products in the cart. Otherwise, null. */
  items_count?: number;

  /** Total quantity of all cart items. Otherwise, null. */
  items_qty?: number;

  /** Customer interface. */
  customer: CustomerDataCustomerInterface;

  /** Interface AddressInterface */
  billing_address?: QuoteDataAddressInterface;

  /** Reserved order ID. Otherwise, null. */
  reserved_order_id?: string;

  /** Original order ID. Otherwise, null. */
  orig_order_id?: number;

  /** Interface CurrencyInterface */
  currency?: QuoteDataCurrencyInterface;

  /** For guest customers, false for logged in customers */
  customer_is_guest?: boolean;

  /** Notice text */
  customer_note?: string;

  /** Customer notification flag */
  customer_note_notify?: boolean;

  /** Customer tax class ID. */
  customer_tax_class_id?: number;

  /** Store identifier */
  store_id: number;

  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\CartInterface */
  extension_attributes?: QuoteDataCartExtensionInterface;
}

/**
 * Interface CartItemInterface
 */
export interface QuoteDataCartItemInterface {
  /** Item ID. Otherwise, null. */
  item_id?: number;

  /** Product SKU. Otherwise, null. */
  sku?: string;

  /** Product quantity. */
  qty: number;

  /** Product name. Otherwise, null. */
  name?: string;

  /** Product price. Otherwise, null. */
  price?: number;

  /** Product type. Otherwise, null. */
  product_type?: string;

  /** Quote id. */
  quote_id: string;

  /** Product option interface */
  product_option?: QuoteDataProductOptionInterface;

  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\CartItemInterface */
  extension_attributes?: QuoteDataCartItemExtensionInterface;
}

/**
 * Product option interface
 */
export interface QuoteDataProductOptionInterface {
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\ProductOptionInterface */
  extension_attributes?: QuoteDataProductOptionExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\ProductOptionInterface
 */
export interface QuoteDataProductOptionExtensionInterface {
  custom_options?: CatalogDataCustomOptionInterface[];
  bundle_options?: BundleDataBundleOptionInterface[];

  /** Downloadable Option */
  downloadable_option?: DownloadableDataDownloadableOptionInterface;
  configurable_item_options?: ConfigurableProductDataConfigurableItemOptionValueInterface[];
}

/**
 * Interface CustomOptionInterface
 */
export interface CatalogDataCustomOptionInterface {
  /** Option id */
  option_id: string;

  /** Option value */
  option_value: string;

  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\CustomOptionInterface */
  extension_attributes?: CatalogDataCustomOptionExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\CustomOptionInterface
 */
export interface CatalogDataCustomOptionExtensionInterface {
  /** Image Content data interface */
  file_info?: FrameworkDataImageContentInterface;
}

/**
 * Interface BundleOptionInterface
 */
export interface BundleDataBundleOptionInterface {
  /** Bundle option id. */
  option_id: number;

  /** Bundle option quantity. */
  option_qty: number;

  /** Bundle option selection ids. */
  option_selections: number[];

  /** ExtensionInterface class for @see \Magento\Bundle\Api\Data\BundleOptionInterface */
  extension_attributes?: BundleDataBundleOptionExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Bundle\Api\Data\BundleOptionInterface
 */
export type BundleDataBundleOptionExtensionInterface = object;

/**
 * Downloadable Option
 */
export interface DownloadableDataDownloadableOptionInterface {
  /** The list of downloadable links */
  downloadable_links: number[];
}

/**
 * Interface ConfigurableItemOptionValueInterface
 */
export interface ConfigurableProductDataConfigurableItemOptionValueInterface {
  /** Option SKU */
  option_id: string;

  /** Item id */
  option_value?: number;

  /** ExtensionInterface class for @see \Magento\ConfigurableProduct\Api\Data\ConfigurableItemOptionValueInterface */
  extension_attributes?: ConfigurableProductDataConfigurableItemOptionValueExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\ConfigurableProduct\Api\Data\ConfigurableItemOptionValueInterface
 */
export type ConfigurableProductDataConfigurableItemOptionValueExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\CartItemInterface
 */
export interface QuoteDataCartItemExtensionInterface {
  discounts?: SalesRuleDataRuleDiscountInterface[];
}

/**
 * Rule discount Interface
 */
export interface SalesRuleDataRuleDiscountInterface {
  /** Discount Data Interface */
  discount_data: SalesRuleDataDiscountDataInterface;

  /** Rule Label */
  rule_label: string;

  /** Rule ID */
  rule_id: number;
}

/**
 * Discount Data Interface
 */
export interface SalesRuleDataDiscountDataInterface {
  /** Amount */
  amount: number;

  /** Base Amount */
  base_amount: number;

  /** Original Amount */
  original_amount: number;

  /** Base Original Amount */
  base_original_amount: number;
}

/**
 * Interface AddressInterface
 */
export interface QuoteDataAddressInterface {
  /** Id */
  id?: number;

  /** Region name */
  region: string;

  /** Region id */
  region_id: number;

  /** Region code */
  region_code: string;

  /** Country id */
  country_id: string;

  /** Street */
  street: string[];

  /** Company */
  company?: string;

  /** Telephone number */
  telephone: string;

  /** Fax number */
  fax?: string;

  /** Postcode */
  postcode: string;

  /** City name */
  city: string;

  /** First name */
  firstname: string;

  /** Last name */
  lastname: string;

  /** Middle name */
  middlename?: string;

  /** Prefix */
  prefix?: string;

  /** Suffix */
  suffix?: string;

  /** Vat id */
  vat_id?: string;

  /** Customer id */
  customer_id?: number;

  /** Billing/shipping email */
  email: string;

  /** Same as billing flag */
  same_as_billing?: number;

  /** Customer address id */
  customer_address_id?: number;

  /** Save in address book flag */
  save_in_address_book?: number;

  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\AddressInterface */
  extension_attributes?: QuoteDataAddressExtensionInterface;

  /** Custom attributes values. */
  custom_attributes?: FrameworkAttributeInterface[];
}

/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\AddressInterface
 */
export interface QuoteDataAddressExtensionInterface {
  pickup_location_code?: string;
  discounts?: SalesRuleDataRuleDiscountInterface[];
}

/**
 * Interface CurrencyInterface
 */
export interface QuoteDataCurrencyInterface {
  /** Global currency code */
  global_currency_code?: string;

  /** Base currency code */
  base_currency_code?: string;

  /** Store currency code */
  store_currency_code?: string;

  /** Quote currency code */
  quote_currency_code?: string;

  /** Store currency to base currency rate */
  store_to_base_rate?: number;

  /** Store currency to quote currency rate */
  store_to_quote_rate?: number;

  /** Base currency to global currency rate */
  base_to_global_rate?: number;

  /** Base currency to quote currency rate */
  base_to_quote_rate?: number;

  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\CurrencyInterface */
  extension_attributes?: QuoteDataCurrencyExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\CurrencyInterface
 */
export type QuoteDataCurrencyExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\CartInterface
 */
export interface QuoteDataCartExtensionInterface {
  shipping_assignments?: QuoteDataShippingAssignmentInterface[];
  amazon_order_reference_id?: AmazonPaymentDataQuoteLinkInterface;
}

/**
 * Interface ShippingAssignmentInterface
 */
export interface QuoteDataShippingAssignmentInterface {
  /** Interface ShippingInterface */
  shipping: QuoteDataShippingInterface;
  items: QuoteDataCartItemInterface[];

  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\ShippingAssignmentInterface */
  extension_attributes?: QuoteDataShippingAssignmentExtensionInterface;
}

/**
 * Interface ShippingInterface
 */
export interface QuoteDataShippingInterface {
  /** Interface AddressInterface */
  address: QuoteDataAddressInterface;

  /** Shipping method */
  method: string;

  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\ShippingInterface */
  extension_attributes?: QuoteDataShippingExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\ShippingInterface
 */
export type QuoteDataShippingExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\ShippingAssignmentInterface
 */
export type QuoteDataShippingAssignmentExtensionInterface = object;

export interface AmazonPaymentDataQuoteLinkInterface {
  id: string;

  /** Amazon order reference id */
  amazon_order_reference_id: string;

  /** Quote id */
  quote_id: number;

  /** Sandbox simulation reference */
  sandbox_simulation_reference: string;

  /** Quote confirmed with amazon */
  confirmed: boolean;
}

/**
 * Interface CartSearchResultsInterface
 */
export interface QuoteDataCartSearchResultsInterface {
  /** Carts list. */
  items: QuoteDataCartInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Interface PaymentInterface
 */
export interface QuoteDataPaymentInterface {
  /** Purchase order number */
  po_number?: string;

  /** Payment method code */
  method: string;

  /** Payment additional details */
  additional_data?: string[];

  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\PaymentInterface */
  extension_attributes?: QuoteDataPaymentExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\PaymentInterface
 */
export interface QuoteDataPaymentExtensionInterface {
  agreement_ids?: string[];
}

/**
 * Interface ShippingMethodInterface
 */
export interface QuoteDataShippingMethodInterface {
  /** Shipping carrier code. */
  carrier_code: string;

  /** Shipping method code. */
  method_code: string;

  /** Shipping carrier title. Otherwise, null. */
  carrier_title?: string;

  /** Shipping method title. Otherwise, null. */
  method_title?: string;

  /** Shipping amount in store currency. */
  amount: number;

  /** Shipping amount in base currency. */
  base_amount: number;

  /** The value of the availability flag for the current shipping method. */
  available: boolean;

  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\ShippingMethodInterface */
  extension_attributes?: QuoteDataShippingMethodExtensionInterface;

  /** Shipping Error message. */
  error_message: string;

  /** Shipping price excl tax. */
  price_excl_tax: number;

  /** Shipping price incl tax. */
  price_incl_tax: number;
}

/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\ShippingMethodInterface
 */
export type QuoteDataShippingMethodExtensionInterface = object;

/**
 * Interface PaymentMethodInterface
 */
export interface QuoteDataPaymentMethodInterface {
  /** Payment method code */
  code: string;

  /** Payment method title */
  title: string;
}

/**
 * Interface TotalsInterface
 */
export interface QuoteDataTotalsInterface {
  /** Grand total in quote currency */
  grand_total?: number;

  /** Grand total in base currency */
  base_grand_total?: number;

  /** Subtotal in quote currency */
  subtotal?: number;

  /** Subtotal in base currency */
  base_subtotal?: number;

  /** Discount amount in quote currency */
  discount_amount?: number;

  /** Discount amount in base currency */
  base_discount_amount?: number;

  /** Subtotal in quote currency with applied discount */
  subtotal_with_discount?: number;

  /** Subtotal in base currency with applied discount */
  base_subtotal_with_discount?: number;

  /** Shipping amount in quote currency */
  shipping_amount?: number;

  /** Shipping amount in base currency */
  base_shipping_amount?: number;

  /** Shipping discount amount in quote currency */
  shipping_discount_amount?: number;

  /** Shipping discount amount in base currency */
  base_shipping_discount_amount?: number;

  /** Tax amount in quote currency */
  tax_amount?: number;

  /** Tax amount in base currency */
  base_tax_amount?: number;

  /** Item weee tax applied amount in quote currency. */
  weee_tax_applied_amount: number;

  /** Shipping tax amount in quote currency */
  shipping_tax_amount?: number;

  /** Shipping tax amount in base currency */
  base_shipping_tax_amount?: number;

  /** Subtotal including tax in quote currency */
  subtotal_incl_tax?: number;

  /** Subtotal including tax in base currency */
  base_subtotal_incl_tax?: number;

  /** Shipping including tax in quote currency */
  shipping_incl_tax?: number;

  /** Shipping including tax in base currency */
  base_shipping_incl_tax?: number;

  /** Base currency code */
  base_currency_code?: string;

  /** Quote currency code */
  quote_currency_code?: string;

  /** Applied coupon code */
  coupon_code?: string;

  /** Items qty */
  items_qty?: number;

  /** Totals by items */
  items?: QuoteDataTotalsItemInterface[];

  /** Dynamically calculated totals */
  total_segments: QuoteDataTotalSegmentInterface[];

  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsInterface */
  extension_attributes?: QuoteDataTotalsExtensionInterface;
}

/**
 * Interface TotalsItemInterface
 */
export interface QuoteDataTotalsItemInterface {
  /** Item id */
  item_id: number;

  /** Item price in quote currency. */
  price: number;

  /** Item price in base currency. */
  base_price: number;

  /** Item quantity. */
  qty: number;

  /** Row total in quote currency. */
  row_total: number;

  /** Row total in base currency. */
  base_row_total: number;

  /** Row total with discount in quote currency. Otherwise, null. */
  row_total_with_discount?: number;

  /** Tax amount in quote currency. Otherwise, null. */
  tax_amount?: number;

  /** Tax amount in base currency. Otherwise, null. */
  base_tax_amount?: number;

  /** Tax percent. Otherwise, null. */
  tax_percent?: number;

  /** Discount amount in quote currency. Otherwise, null. */
  discount_amount?: number;

  /** Discount amount in base currency. Otherwise, null. */
  base_discount_amount?: number;

  /** Discount percent. Otherwise, null. */
  discount_percent?: number;

  /** Price including tax in quote currency. Otherwise, null. */
  price_incl_tax?: number;

  /** Price including tax in base currency. Otherwise, null. */
  base_price_incl_tax?: number;

  /** Row total including tax in quote currency. Otherwise, null. */
  row_total_incl_tax?: number;

  /** Row total including tax in base currency. Otherwise, null. */
  base_row_total_incl_tax?: number;

  /** Item price in quote currency. */
  options: string;

  /** Item weee tax applied amount in quote currency. */
  weee_tax_applied_amount: number;

  /** Item weee tax applied in quote currency. */
  weee_tax_applied: string;

  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsItemInterface */
  extension_attributes?: QuoteDataTotalsItemExtensionInterface;

  /** Product name. Otherwise, null. */
  name?: string;
}

/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsItemInterface
 */
export type QuoteDataTotalsItemExtensionInterface = object;

/**
 * Interface TotalsInterface
 */
export interface QuoteDataTotalSegmentInterface {
  /** Code */
  code: string;

  /** Total title */
  title?: string;

  /** Total value */
  value: number;

  /** Display area code. */
  area?: string;

  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalSegmentInterface */
  extension_attributes?: QuoteDataTotalSegmentExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalSegmentInterface
 */
export interface QuoteDataTotalSegmentExtensionInterface {
  tax_grandtotal_details?: TaxDataGrandTotalDetailsInterface[];
  vertex_tax_calculation_messages?: string[];
}

/**
 * Interface GrandTotalDetailsInterface
 */
export interface TaxDataGrandTotalDetailsInterface {
  /** Tax amount value */
  amount: number;

  /** Tax rates info */
  rates: TaxDataGrandTotalRatesInterface[];

  /** Group identifier */
  group_id: number;
}

/**
 * Interface GrandTotalRatesInterface
 */
export interface TaxDataGrandTotalRatesInterface {
  /** Tax percentage value */
  percent: string;

  /** Rate title */
  title: string;
}

/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsInterface
 */
export interface QuoteDataTotalsExtensionInterface {
  coupon_label?: string;
}

/**
 * Additional data for totals collection.
 */
export interface QuoteDataTotalsAdditionalDataInterface {
  /** ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsAdditionalDataInterface */
  extension_attributes?: QuoteDataTotalsAdditionalDataExtensionInterface;

  /** Custom attributes values. */
  custom_attributes?: FrameworkAttributeInterface[];
}

/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsAdditionalDataInterface
 */
export interface QuoteDataTotalsAdditionalDataExtensionInterface {
  gift_messages?: GiftMessageDataMessageInterface[];
}

/**
 * Interface MessageInterface
 */
export interface GiftMessageDataMessageInterface {
  /** Gift message ID. Otherwise, null. */
  gift_message_id?: number;

  /** Customer ID. Otherwise, null. */
  customer_id?: number;

  /** Sender name. */
  sender: string;

  /** Recipient name. */
  recipient: string;

  /** Message text. */
  message: string;

  /** ExtensionInterface class for @see \Magento\GiftMessage\Api\Data\MessageInterface */
  extension_attributes?: GiftMessageDataMessageExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\GiftMessage\Api\Data\MessageInterface
 */
export interface GiftMessageDataMessageExtensionInterface {
  entity_id?: string;
  entity_type?: string;
}

/**
 * Order interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
 */
export interface SalesDataOrderInterface {
  /** Negative adjustment value. */
  adjustment_negative?: number;

  /** Positive adjustment value. */
  adjustment_positive?: number;

  /** Applied rule IDs. */
  applied_rule_ids?: string;

  /** Base negative adjustment value. */
  base_adjustment_negative?: number;

  /** Base positive adjustment value. */
  base_adjustment_positive?: number;

  /** Base currency code. */
  base_currency_code?: string;

  /** Base discount amount. */
  base_discount_amount?: number;

  /** Base discount canceled. */
  base_discount_canceled?: number;

  /** Base discount invoiced. */
  base_discount_invoiced?: number;

  /** Base discount refunded. */
  base_discount_refunded?: number;

  /** Base grand total. */
  base_grand_total: number;

  /** Base discount tax compensation amount. */
  base_discount_tax_compensation_amount?: number;

  /** Base discount tax compensation invoiced. */
  base_discount_tax_compensation_invoiced?: number;

  /** Base discount tax compensation refunded. */
  base_discount_tax_compensation_refunded?: number;

  /** Base shipping amount. */
  base_shipping_amount?: number;

  /** Base shipping canceled. */
  base_shipping_canceled?: number;

  /** Base shipping discount amount. */
  base_shipping_discount_amount?: number;

  /** Base shipping discount tax compensation amount. */
  base_shipping_discount_tax_compensation_amnt?: number;

  /** Base shipping including tax. */
  base_shipping_incl_tax?: number;

  /** Base shipping invoiced. */
  base_shipping_invoiced?: number;

  /** Base shipping refunded. */
  base_shipping_refunded?: number;

  /** Base shipping tax amount. */
  base_shipping_tax_amount?: number;

  /** Base shipping tax refunded. */
  base_shipping_tax_refunded?: number;

  /** Base subtotal. */
  base_subtotal?: number;

  /** Base subtotal canceled. */
  base_subtotal_canceled?: number;

  /** Base subtotal including tax. */
  base_subtotal_incl_tax?: number;

  /** Base subtotal invoiced. */
  base_subtotal_invoiced?: number;

  /** Base subtotal refunded. */
  base_subtotal_refunded?: number;

  /** Base tax amount. */
  base_tax_amount?: number;

  /** Base tax canceled. */
  base_tax_canceled?: number;

  /** Base tax invoiced. */
  base_tax_invoiced?: number;

  /** Base tax refunded. */
  base_tax_refunded?: number;

  /** Base total canceled. */
  base_total_canceled?: number;

  /** Base total due. */
  base_total_due?: number;

  /** Base total invoiced. */
  base_total_invoiced?: number;

  /** Base total invoiced cost. */
  base_total_invoiced_cost?: number;

  /** Base total offline refunded. */
  base_total_offline_refunded?: number;

  /** Base total online refunded. */
  base_total_online_refunded?: number;

  /** Base total paid. */
  base_total_paid?: number;

  /** Base total quantity ordered. */
  base_total_qty_ordered?: number;

  /** Base total refunded. */
  base_total_refunded?: number;

  /** Base-to-global rate. */
  base_to_global_rate?: number;

  /** Base-to-order rate. */
  base_to_order_rate?: number;

  /** Billing address ID. */
  billing_address_id?: number;

  /** Can-ship-partially flag value. */
  can_ship_partially?: number;

  /** Can-ship-partially-item flag value. */
  can_ship_partially_item?: number;

  /** Coupon code. */
  coupon_code?: string;

  /** Created-at timestamp. */
  created_at?: string;

  /** Customer date-of-birth (DOB). */
  customer_dob?: string;

  /** Customer email address. */
  customer_email: string;

  /** Customer first name. */
  customer_firstname?: string;

  /** Customer gender. */
  customer_gender?: number;

  /** Customer group ID. */
  customer_group_id?: number;

  /** Customer ID. */
  customer_id?: number;

  /** Customer-is-guest flag value. */
  customer_is_guest?: number;

  /** Customer last name. */
  customer_lastname?: string;

  /** Customer middle name. */
  customer_middlename?: string;

  /** Customer note. */
  customer_note?: string;

  /** Customer-note-notify flag value. */
  customer_note_notify?: number;

  /** Customer prefix. */
  customer_prefix?: string;

  /** Customer suffix. */
  customer_suffix?: string;

  /** Customer value-added tax (VAT). */
  customer_taxvat?: string;

  /** Discount amount. */
  discount_amount?: number;

  /** Discount canceled. */
  discount_canceled?: number;

  /** Discount description. */
  discount_description?: string;

  /** Discount invoiced. */
  discount_invoiced?: number;

  /** Discount refunded amount. */
  discount_refunded?: number;

  /** Edit increment value. */
  edit_increment?: number;

  /** Email-sent flag value. */
  email_sent?: number;

  /** Order ID. */
  entity_id?: number;

  /** External customer ID. */
  ext_customer_id?: string;

  /** External order ID. */
  ext_order_id?: string;

  /** Forced-shipment-with-invoice flag value. */
  forced_shipment_with_invoice?: number;

  /** Global currency code. */
  global_currency_code?: string;

  /** Grand total. */
  grand_total: number;

  /** Discount tax compensation amount. */
  discount_tax_compensation_amount?: number;

  /** Discount tax compensation invoiced amount. */
  discount_tax_compensation_invoiced?: number;

  /** Discount tax compensation refunded amount. */
  discount_tax_compensation_refunded?: number;

  /** Hold before state. */
  hold_before_state?: string;

  /** Hold before status. */
  hold_before_status?: string;

  /** Increment ID. */
  increment_id?: string;

  /** Is-virtual flag value. */
  is_virtual?: number;

  /** Order currency code. */
  order_currency_code?: string;

  /** Original increment ID. */
  original_increment_id?: string;

  /** Payment authorization amount. */
  payment_authorization_amount?: number;

  /** Payment authorization expiration date. */
  payment_auth_expiration?: number;

  /** Protect code. */
  protect_code?: string;

  /** Quote address ID. */
  quote_address_id?: number;

  /** Quote ID. */
  quote_id?: number;

  /** Relation child ID. */
  relation_child_id?: string;

  /** Relation child real ID. */
  relation_child_real_id?: string;

  /** Relation parent ID. */
  relation_parent_id?: string;

  /** Relation parent real ID. */
  relation_parent_real_id?: string;

  /** Remote IP address. */
  remote_ip?: string;

  /** Shipping amount. */
  shipping_amount?: number;

  /** Shipping canceled amount. */
  shipping_canceled?: number;

  /** Shipping description. */
  shipping_description?: string;

  /** Shipping discount amount. */
  shipping_discount_amount?: number;

  /** Shipping discount tax compensation amount. */
  shipping_discount_tax_compensation_amount?: number;

  /** Shipping including tax amount. */
  shipping_incl_tax?: number;

  /** Shipping invoiced amount. */
  shipping_invoiced?: number;

  /** Shipping refunded amount. */
  shipping_refunded?: number;

  /** Shipping tax amount. */
  shipping_tax_amount?: number;

  /** Shipping tax refunded amount. */
  shipping_tax_refunded?: number;

  /** State. */
  state?: string;

  /** Status. */
  status?: string;

  /** Store currency code. */
  store_currency_code?: string;

  /** Store ID. */
  store_id?: number;

  /** Store name. */
  store_name?: string;

  /** Store-to-base rate. */
  store_to_base_rate?: number;

  /** Store-to-order rate. */
  store_to_order_rate?: number;

  /** Subtotal. */
  subtotal?: number;

  /** Subtotal canceled amount. */
  subtotal_canceled?: number;

  /** Subtotal including tax amount. */
  subtotal_incl_tax?: number;

  /** Subtotal invoiced amount. */
  subtotal_invoiced?: number;

  /** Subtotal refunded amount. */
  subtotal_refunded?: number;

  /** Tax amount. */
  tax_amount?: number;

  /** Tax canceled amount. */
  tax_canceled?: number;

  /** Tax invoiced amount. */
  tax_invoiced?: number;

  /** Tax refunded amount. */
  tax_refunded?: number;

  /** Total canceled. */
  total_canceled?: number;

  /** Total due. */
  total_due?: number;

  /** Total invoiced amount. */
  total_invoiced?: number;

  /** Total item count. */
  total_item_count?: number;

  /** Total offline refunded amount. */
  total_offline_refunded?: number;

  /** Total online refunded amount. */
  total_online_refunded?: number;

  /** Total paid. */
  total_paid?: number;

  /** Total quantity ordered. */
  total_qty_ordered?: number;

  /** Total amount refunded. */
  total_refunded?: number;

  /** Updated-at timestamp. */
  updated_at?: string;

  /** Weight. */
  weight?: number;

  /** X-Forwarded-For field value. */
  x_forwarded_for?: string;

  /** Array of items. */
  items: SalesDataOrderItemInterface[];

  /** Order address interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
  billing_address?: SalesDataOrderAddressInterface;

  /** Order payment interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
  payment?: SalesDataOrderPaymentInterface;

  /** Array of status histories. */
  status_histories?: SalesDataOrderStatusHistoryInterface[];

  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderInterface */
  extension_attributes?: SalesDataOrderExtensionInterface;
}

/**
 * Order item interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
 */
export interface SalesDataOrderItemInterface {
  /** Additional data. */
  additional_data?: string;

  /** Amount refunded. */
  amount_refunded?: number;

  /** Applied rule IDs. */
  applied_rule_ids?: string;

  /** Base amount refunded. */
  base_amount_refunded?: number;

  /** Base cost. */
  base_cost?: number;

  /** Base discount amount. */
  base_discount_amount?: number;

  /** Base discount invoiced. */
  base_discount_invoiced?: number;

  /** Base discount refunded. */
  base_discount_refunded?: number;

  /** Base discount tax compensation amount. */
  base_discount_tax_compensation_amount?: number;

  /** Base discount tax compensation invoiced. */
  base_discount_tax_compensation_invoiced?: number;

  /** Base discount tax compensation refunded. */
  base_discount_tax_compensation_refunded?: number;

  /** Base original price. */
  base_original_price?: number;

  /** Base price. */
  base_price?: number;

  /** Base price including tax. */
  base_price_incl_tax?: number;

  /** Base row invoiced. */
  base_row_invoiced?: number;

  /** Base row total. */
  base_row_total?: number;

  /** Base row total including tax. */
  base_row_total_incl_tax?: number;

  /** Base tax amount. */
  base_tax_amount?: number;

  /** Base tax before discount. */
  base_tax_before_discount?: number;

  /** Base tax invoiced. */
  base_tax_invoiced?: number;

  /** Base tax refunded. */
  base_tax_refunded?: number;

  /** Base WEEE tax applied amount. */
  base_weee_tax_applied_amount?: number;

  /** Base WEEE tax applied row amount. */
  base_weee_tax_applied_row_amnt?: number;

  /** Base WEEE tax disposition. */
  base_weee_tax_disposition?: number;

  /** Base WEEE tax row disposition. */
  base_weee_tax_row_disposition?: number;

  /** Created-at timestamp. */
  created_at?: string;

  /** Description. */
  description?: string;

  /** Discount amount. */
  discount_amount?: number;

  /** Discount invoiced. */
  discount_invoiced?: number;

  /** Discount percent. */
  discount_percent?: number;

  /** Discount refunded. */
  discount_refunded?: number;

  /** Event ID. */
  event_id?: number;

  /** External order item ID. */
  ext_order_item_id?: string;

  /** Free-shipping flag value. */
  free_shipping?: number;

  /** GW base price. */
  gw_base_price?: number;

  /** GW base price invoiced. */
  gw_base_price_invoiced?: number;

  /** GW base price refunded. */
  gw_base_price_refunded?: number;

  /** GW base tax amount. */
  gw_base_tax_amount?: number;

  /** GW base tax amount invoiced. */
  gw_base_tax_amount_invoiced?: number;

  /** GW base tax amount refunded. */
  gw_base_tax_amount_refunded?: number;

  /** GW ID. */
  gw_id?: number;

  /** GW price. */
  gw_price?: number;

  /** GW price invoiced. */
  gw_price_invoiced?: number;

  /** GW price refunded. */
  gw_price_refunded?: number;

  /** GW tax amount. */
  gw_tax_amount?: number;

  /** GW tax amount invoiced. */
  gw_tax_amount_invoiced?: number;

  /** GW tax amount refunded. */
  gw_tax_amount_refunded?: number;

  /** Discount tax compensation amount. */
  discount_tax_compensation_amount?: number;

  /** Discount tax compensation canceled. */
  discount_tax_compensation_canceled?: number;

  /** Discount tax compensation invoiced. */
  discount_tax_compensation_invoiced?: number;

  /** Discount tax compensation refunded. */
  discount_tax_compensation_refunded?: number;

  /** Is-quantity-decimal flag value. */
  is_qty_decimal?: number;

  /** Is-virtual flag value. */
  is_virtual?: number;

  /** Item ID. */
  item_id?: number;

  /** Locked DO invoice flag value. */
  locked_do_invoice?: number;

  /** Locked DO ship flag value. */
  locked_do_ship?: number;

  /** Name. */
  name?: string;

  /** No-discount flag value. */
  no_discount?: number;

  /** Order ID. */
  order_id?: number;

  /** Original price. */
  original_price?: number;

  /** Parent item ID. */
  parent_item_id?: number;

  /** Price. */
  price?: number;

  /** Price including tax. */
  price_incl_tax?: number;

  /** Product ID. */
  product_id?: number;

  /** Product type. */
  product_type?: string;

  /** Quantity backordered. */
  qty_backordered?: number;

  /** Quantity canceled. */
  qty_canceled?: number;

  /** Quantity invoiced. */
  qty_invoiced?: number;

  /** Quantity ordered. */
  qty_ordered?: number;

  /** Quantity refunded. */
  qty_refunded?: number;

  /** Quantity returned. */
  qty_returned?: number;

  /** Quantity shipped. */
  qty_shipped?: number;

  /** Quote item ID. */
  quote_item_id?: number;

  /** Row invoiced. */
  row_invoiced?: number;

  /** Row total. */
  row_total?: number;

  /** Row total including tax. */
  row_total_incl_tax?: number;

  /** Row weight. */
  row_weight?: number;

  /** SKU. */
  sku: string;

  /** Store ID. */
  store_id?: number;

  /** Tax amount. */
  tax_amount?: number;

  /** Tax before discount. */
  tax_before_discount?: number;

  /** Tax canceled. */
  tax_canceled?: number;

  /** Tax invoiced. */
  tax_invoiced?: number;

  /** Tax percent. */
  tax_percent?: number;

  /** Tax refunded. */
  tax_refunded?: number;

  /** Updated-at timestamp. */
  updated_at?: string;

  /** WEEE tax applied. */
  weee_tax_applied?: string;

  /** WEEE tax applied amount. */
  weee_tax_applied_amount?: number;

  /** WEEE tax applied row amount. */
  weee_tax_applied_row_amount?: number;

  /** WEEE tax disposition. */
  weee_tax_disposition?: number;

  /** WEEE tax row disposition. */
  weee_tax_row_disposition?: number;

  /** Weight. */
  weight?: number;

  /** Order item interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
  parent_item?: SalesDataOrderItemInterface;

  /** Product option interface */
  product_option?: CatalogDataProductOptionInterface;

  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderItemInterface */
  extension_attributes?: SalesDataOrderItemExtensionInterface;
}

/**
 * Product option interface
 */
export interface CatalogDataProductOptionInterface {
  /** ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductOptionInterface */
  extension_attributes?: CatalogDataProductOptionExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductOptionInterface
 */
export interface CatalogDataProductOptionExtensionInterface {
  custom_options?: CatalogDataCustomOptionInterface[];
  bundle_options?: BundleDataBundleOptionInterface[];

  /** Downloadable Option */
  downloadable_option?: DownloadableDataDownloadableOptionInterface;
  configurable_item_options?: ConfigurableProductDataConfigurableItemOptionValueInterface[];
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderItemInterface
 */
export interface SalesDataOrderItemExtensionInterface {
  /** Interface MessageInterface */
  gift_message?: GiftMessageDataMessageInterface;
  vertex_tax_codes?: string[];
  invoice_text_codes?: string[];
  tax_codes?: string[];

  /** Data model representing a Commmodity Code */
  vertex_commodity_code?: VertexTaxDataCommodityCodeInterface;
}

/**
 * Order address interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
 */
export interface SalesDataOrderAddressInterface {
  /** Address type. */
  address_type: string;

  /** City. */
  city: string;

  /** Company. */
  company?: string;

  /** Country ID. */
  country_id: string;

  /** Country address ID. */
  customer_address_id?: number;

  /** Customer ID. */
  customer_id?: number;

  /** Email address. */
  email?: string;

  /** Order address ID. */
  entity_id?: number;

  /** Fax number. */
  fax?: string;

  /** First name. */
  firstname: string;

  /** Last name. */
  lastname: string;

  /** Middle name. */
  middlename?: string;

  /** Parent ID. */
  parent_id?: number;

  /** Postal code. */
  postcode: string;

  /** Prefix. */
  prefix?: string;

  /** Region. */
  region?: string;

  /** Region code. */
  region_code?: string;

  /** Region ID. */
  region_id?: number;

  /** Array of any street values. Otherwise, null. */
  street?: string[];

  /** Suffix. */
  suffix?: string;

  /** Telephone number. */
  telephone: string;

  /** VAT ID. */
  vat_id?: string;

  /** VAT-is-valid flag value. */
  vat_is_valid?: number;

  /** VAT request date. */
  vat_request_date?: string;

  /** VAT request ID. */
  vat_request_id?: string;

  /** VAT-request-success flag value. */
  vat_request_success?: number;

  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderAddressInterface */
  extension_attributes?: SalesDataOrderAddressExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderAddressInterface
 */
export interface SalesDataOrderAddressExtensionInterface {
  vertex_vat_country_code?: string;
}

/**
 * Order payment interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
 */
export interface SalesDataOrderPaymentInterface {
  /** Account status. */
  account_status: string;

  /** Additional data. */
  additional_data?: string;

  /** Array of additional information. */
  additional_information: string[];

  /** Address status. */
  address_status?: string;

  /** Amount authorized. */
  amount_authorized?: number;

  /** Amount canceled. */
  amount_canceled?: number;

  /** Amount ordered. */
  amount_ordered?: number;

  /** Amount paid. */
  amount_paid?: number;

  /** Amount refunded. */
  amount_refunded?: number;

  /** Anet transaction method. */
  anet_trans_method?: string;

  /** Base amount authorized. */
  base_amount_authorized?: number;

  /** Base amount canceled. */
  base_amount_canceled?: number;

  /** Base amount ordered. */
  base_amount_ordered?: number;

  /** Base amount paid. */
  base_amount_paid?: number;

  /** Base amount paid online. */
  base_amount_paid_online?: number;

  /** Base amount refunded. */
  base_amount_refunded?: number;

  /** Base amount refunded online. */
  base_amount_refunded_online?: number;

  /** Base shipping amount. */
  base_shipping_amount?: number;

  /** Base shipping captured amount. */
  base_shipping_captured?: number;

  /** Base shipping refunded amount. */
  base_shipping_refunded?: number;

  /** Credit card approval. */
  cc_approval?: string;

  /** Credit card avs status. */
  cc_avs_status?: string;

  /** Credit card CID status. */
  cc_cid_status?: string;

  /** Credit card debug request body. */
  cc_debug_request_body?: string;

  /** Credit card debug response body. */
  cc_debug_response_body?: string;

  /** Credit card debug response serialized. */
  cc_debug_response_serialized?: string;

  /** Credit card expiration month. */
  cc_exp_month?: string;

  /** Credit card expiration year. */
  cc_exp_year?: string;

  /** Last four digits of the credit card. */
  cc_last4: string;

  /** Encrypted credit card number. */
  cc_number_enc?: string;

  /** Credit card number. */
  cc_owner?: string;

  /** Credit card secure verify. */
  cc_secure_verify?: string;

  /** Credit card SS issue. */
  cc_ss_issue?: string;

  /** Credit card SS start month. */
  cc_ss_start_month?: string;

  /** Credit card SS start year. */
  cc_ss_start_year?: string;

  /** Credit card status. */
  cc_status?: string;

  /** Credit card status description. */
  cc_status_description?: string;

  /** Credit card transaction ID. */
  cc_trans_id?: string;

  /** Credit card type. */
  cc_type?: string;

  /** eCheck account name. */
  echeck_account_name?: string;

  /** eCheck account type. */
  echeck_account_type?: string;

  /** eCheck bank name. */
  echeck_bank_name?: string;

  /** eCheck routing number. */
  echeck_routing_number?: string;

  /** eCheck type. */
  echeck_type?: string;

  /** Entity ID. */
  entity_id?: number;

  /** Last transaction ID. */
  last_trans_id?: string;

  /** Method. */
  method: string;

  /** Parent ID. */
  parent_id?: number;

  /** PO number. */
  po_number?: string;

  /** Protection eligibility. */
  protection_eligibility?: string;

  /** Quote payment ID. */
  quote_payment_id?: number;

  /** Shipping amount. */
  shipping_amount?: number;

  /** Shipping captured. */
  shipping_captured?: number;

  /** Shipping refunded. */
  shipping_refunded?: number;

  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderPaymentInterface */
  extension_attributes?: SalesDataOrderPaymentExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderPaymentInterface
 */
export interface SalesDataOrderPaymentExtensionInterface {
  notification_message?: string;

  /** Gateway vault payment token interface. */
  vault_payment_token?: VaultDataPaymentTokenInterface;
}

/**
 * Gateway vault payment token interface.
 */
export interface VaultDataPaymentTokenInterface {
  /** Entity ID. */
  entity_id?: number;

  /** Customer ID. */
  customer_id?: number;

  /** Public hash */
  public_hash: string;

  /** Payment method code */
  payment_method_code: string;

  /** Type */
  type: string;

  /** Token creation timestamp */
  created_at?: string;

  /** Token expiration timestamp */
  expires_at?: string;

  /** Gateway token ID */
  gateway_token: string;

  /** Token details */
  token_details: string;

  /** Is active. */
  is_active: boolean;

  /** Is visible. */
  is_visible: boolean;
}

/**
 * Order status history interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
 */
export interface SalesDataOrderStatusHistoryInterface {
  /** Comment. */
  comment: string;

  /** Created-at timestamp. */
  created_at?: string;

  /** Order status history ID. */
  entity_id?: number;

  /** Entity name. */
  entity_name?: string;

  /** Is-customer-notified flag value. */
  is_customer_notified: number;

  /** Is-visible-on-storefront flag value. */
  is_visible_on_front: number;

  /** Parent ID. */
  parent_id: number;

  /** Status. */
  status?: string;

  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderStatusHistoryInterface */
  extension_attributes?: SalesDataOrderStatusHistoryExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderStatusHistoryInterface
 */
export type SalesDataOrderStatusHistoryExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderInterface
 */
export interface SalesDataOrderExtensionInterface {
  shipping_assignments?: SalesDataShippingAssignmentInterface[];
  payment_additional_info?: PaymentDataPaymentAdditionalInfoInterface[];

  /** Interface MessageInterface */
  gift_message?: GiftMessageDataMessageInterface;
  pickup_location_code?: string;
  notification_sent?: number;
  send_notification?: number;
  applied_taxes?: TaxDataOrderTaxDetailsAppliedTaxInterface[];
  item_applied_taxes?: TaxDataOrderTaxDetailsItemInterface[];
  converting_from_quote?: boolean;
  amazon_order_reference_id?: AmazonPaymentDataOrderLinkInterface;
}

/**
 * Interface ShippingAssignmentInterface
 */
export interface SalesDataShippingAssignmentInterface {
  /** Interface ShippingInterface */
  shipping: SalesDataShippingInterface;

  /** Order items of shipping assignment */
  items: SalesDataOrderItemInterface[];

  /** Stock id */
  stock_id?: number;

  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\ShippingAssignmentInterface */
  extension_attributes?: SalesDataShippingAssignmentExtensionInterface;
}

/**
 * Interface ShippingInterface
 */
export interface SalesDataShippingInterface {
  /** Order address interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
  address?: SalesDataOrderAddressInterface;

  /** Shipping method */
  method?: string;

  /** Interface TotalInterface */
  total?: SalesDataTotalInterface;

  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\ShippingInterface */
  extension_attributes?: SalesDataShippingExtensionInterface;
}

/**
 * Interface TotalInterface
 */
export interface SalesDataTotalInterface {
  /** Base shipping amount. */
  base_shipping_amount?: number;

  /** Base shipping canceled. */
  base_shipping_canceled?: number;

  /** Base shipping discount amount. */
  base_shipping_discount_amount?: number;

  /** Base shipping discount tax compensation amount. */
  base_shipping_discount_tax_compensation_amnt?: number;

  /** Base shipping including tax. */
  base_shipping_incl_tax?: number;

  /** Base shipping invoiced. */
  base_shipping_invoiced?: number;

  /** Base shipping refunded. */
  base_shipping_refunded?: number;

  /** Base shipping tax amount. */
  base_shipping_tax_amount?: number;

  /** Base shipping tax refunded. */
  base_shipping_tax_refunded?: number;

  /** Shipping amount. */
  shipping_amount?: number;

  /** Shipping canceled amount. */
  shipping_canceled?: number;

  /** Shipping discount amount. */
  shipping_discount_amount?: number;

  /** Shipping discount tax compensation amount. */
  shipping_discount_tax_compensation_amount?: number;

  /** Shipping including tax amount. */
  shipping_incl_tax?: number;

  /** Shipping invoiced amount. */
  shipping_invoiced?: number;

  /** Shipping refunded amount. */
  shipping_refunded?: number;

  /** Shipping tax amount. */
  shipping_tax_amount?: number;

  /** Shipping tax refunded amount. */
  shipping_tax_refunded?: number;

  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\TotalInterface */
  extension_attributes?: SalesDataTotalExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\TotalInterface
 */
export type SalesDataTotalExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShippingInterface
 */
export type SalesDataShippingExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShippingAssignmentInterface
 */
export type SalesDataShippingAssignmentExtensionInterface = object;

/**
 * Payment additional info interface.
 */
export interface PaymentDataPaymentAdditionalInfoInterface {
  /** Object key */
  key: string;

  /** Object value */
  value: string;
}

/**
 * Interface OrderTaxDetailsAppliedTaxInterface
 */
export interface TaxDataOrderTaxDetailsAppliedTaxInterface {
  /** Code */
  code?: string;

  /** Title */
  title?: string;

  /** Tax Percent */
  percent?: number;

  /** Tax amount */
  amount: number;

  /** Tax amount in base currency */
  base_amount: number;

  /** ExtensionInterface class for @see \Magento\Tax\Api\Data\OrderTaxDetailsAppliedTaxInterface */
  extension_attributes?: TaxDataOrderTaxDetailsAppliedTaxExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Tax\Api\Data\OrderTaxDetailsAppliedTaxInterface
 */
export interface TaxDataOrderTaxDetailsAppliedTaxExtensionInterface {
  rates?: TaxDataAppliedTaxRateInterface[];
}

/**
 * Applied tax rate interface.
 */
export interface TaxDataAppliedTaxRateInterface {
  /** Code */
  code?: string;

  /** Title */
  title?: string;

  /** Tax Percent */
  percent?: number;

  /** ExtensionInterface class for @see \Magento\Tax\Api\Data\AppliedTaxRateInterface */
  extension_attributes?: TaxDataAppliedTaxRateExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Tax\Api\Data\AppliedTaxRateInterface
 */
export type TaxDataAppliedTaxRateExtensionInterface = object;

/**
 * Interface OrderTaxDetailsItemInterface
 */
export interface TaxDataOrderTaxDetailsItemInterface {
  /** Type (shipping, product, weee, gift wrapping, etc) */
  type?: string;

  /** Item id if this item is a product */
  item_id?: number;

  /** Associated item id if this item is associated with another item, null otherwise */
  associated_item_id?: number;

  /** Applied taxes */
  applied_taxes?: TaxDataOrderTaxDetailsAppliedTaxInterface[];

  /** ExtensionInterface class for @see \Magento\Tax\Api\Data\OrderTaxDetailsItemInterface */
  extension_attributes?: TaxDataOrderTaxDetailsItemExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Tax\Api\Data\OrderTaxDetailsItemInterface
 */
export type TaxDataOrderTaxDetailsItemExtensionInterface = object;

export interface AmazonPaymentDataOrderLinkInterface {
  /** Amazon order reference id */
  amazon_order_reference_id: string;

  /** Order id */
  order_id: number;
}

/**
 * Order search result interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
 */
export interface SalesDataOrderSearchResultInterface {
  /** Array of collection items. */
  items: SalesDataOrderInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Order status history search result interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
 */
export interface SalesDataOrderStatusHistorySearchResultInterface {
  /** Array of collection items. */
  items: SalesDataOrderStatusHistoryInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Order item search result interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
 */
export interface SalesDataOrderItemSearchResultInterface {
  /** Array of collection items. */
  items: SalesDataOrderItemInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Invoice interface. An invoice is a record of the receipt of payment for an order.
 */
export interface SalesDataInvoiceInterface {
  /** Base currency code. */
  base_currency_code?: string;

  /** Base discount amount. */
  base_discount_amount?: number;

  /** Base grand total. */
  base_grand_total?: number;

  /** Base discount tax compensation amount. */
  base_discount_tax_compensation_amount?: number;

  /** Base shipping amount. */
  base_shipping_amount?: number;

  /** Base shipping discount tax compensation amount. */
  base_shipping_discount_tax_compensation_amnt?: number;

  /** Base shipping including tax. */
  base_shipping_incl_tax?: number;

  /** Base shipping tax amount. */
  base_shipping_tax_amount?: number;

  /** Base subtotal. */
  base_subtotal?: number;

  /** Base subtotal including tax. */
  base_subtotal_incl_tax?: number;

  /** Base tax amount. */
  base_tax_amount?: number;

  /** Base total refunded. */
  base_total_refunded?: number;

  /** Base-to-global rate. */
  base_to_global_rate?: number;

  /** Base-to-order rate. */
  base_to_order_rate?: number;

  /** Billing address ID. */
  billing_address_id?: number;

  /** Can void flag value. */
  can_void_flag?: number;

  /** Created-at timestamp. */
  created_at?: string;

  /** Discount amount. */
  discount_amount?: number;

  /** Discount description. */
  discount_description?: string;

  /** Email-sent flag value. */
  email_sent?: number;

  /** Invoice ID. */
  entity_id?: number;

  /** Global currency code. */
  global_currency_code?: string;

  /** Grand total. */
  grand_total?: number;

  /** Discount tax compensation amount. */
  discount_tax_compensation_amount?: number;

  /** Increment ID. */
  increment_id?: string;

  /** Is-used-for-refund flag value. */
  is_used_for_refund?: number;

  /** Order currency code. */
  order_currency_code?: string;

  /** Order ID. */
  order_id: number;

  /** Shipping address ID. */
  shipping_address_id?: number;

  /** Shipping amount. */
  shipping_amount?: number;

  /** Shipping discount tax compensation amount. */
  shipping_discount_tax_compensation_amount?: number;

  /** Shipping including tax. */
  shipping_incl_tax?: number;

  /** Shipping tax amount. */
  shipping_tax_amount?: number;

  /** State. */
  state?: number;

  /** Store currency code. */
  store_currency_code?: string;

  /** Store ID. */
  store_id?: number;

  /** Store-to-base rate. */
  store_to_base_rate?: number;

  /** Store-to-order rate. */
  store_to_order_rate?: number;

  /** Subtotal. */
  subtotal?: number;

  /** Subtotal including tax. */
  subtotal_incl_tax?: number;

  /** Tax amount. */
  tax_amount?: number;

  /** Total quantity. */
  total_qty: number;

  /** Transaction ID. */
  transaction_id?: string;

  /** Updated-at timestamp. */
  updated_at?: string;

  /** Array of invoice items. */
  items: SalesDataInvoiceItemInterface[];

  /** Array of any invoice comments. Otherwise, null. */
  comments?: SalesDataInvoiceCommentInterface[];

  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceInterface */
  extension_attributes?: SalesDataInvoiceExtensionInterface;
}

/**
 * Invoice item interface. An invoice is a record of the receipt of payment for an order. An invoice item is a purchased item in an invoice.
 */
export interface SalesDataInvoiceItemInterface {
  /** Additional data. */
  additional_data?: string;

  /** Base cost. */
  base_cost?: number;

  /** Base discount amount. */
  base_discount_amount?: number;

  /** Base discount tax compensation amount. */
  base_discount_tax_compensation_amount?: number;

  /** Base price. */
  base_price?: number;

  /** Base price including tax. */
  base_price_incl_tax?: number;

  /** Base row total. */
  base_row_total?: number;

  /** Base row total including tax. */
  base_row_total_incl_tax?: number;

  /** Base tax amount. */
  base_tax_amount?: number;

  /** Description. */
  description?: string;

  /** Discount amount. */
  discount_amount?: number;

  /** Invoice item ID. */
  entity_id?: number;

  /** Discount tax compensation amount. */
  discount_tax_compensation_amount?: number;

  /** Name. */
  name?: string;

  /** Parent ID. */
  parent_id?: number;

  /** Price. */
  price?: number;

  /** Price including tax. */
  price_incl_tax?: number;

  /** Product ID. */
  product_id?: number;

  /** Row total. */
  row_total?: number;

  /** Row total including tax. */
  row_total_incl_tax?: number;

  /** SKU. */
  sku: string;

  /** Tax amount. */
  tax_amount?: number;

  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceItemInterface */
  extension_attributes?: SalesDataInvoiceItemExtensionInterface;

  /** Order item ID. */
  order_item_id: number;

  /** Quantity. */
  qty: number;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceItemInterface
 */
export interface SalesDataInvoiceItemExtensionInterface {
  vertex_tax_codes?: string[];
  invoice_text_codes?: string[];
  tax_codes?: string[];
}

/**
 * Invoice comment interface. An invoice is a record of the receipt of payment for an order. An invoice can include comments that detail the invoice history.
 */
export interface SalesDataInvoiceCommentInterface {
  /** Is-customer-notified flag value. */
  is_customer_notified: number;

  /** Parent ID. */
  parent_id: number;

  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceCommentInterface */
  extension_attributes?: SalesDataInvoiceCommentExtensionInterface;

  /** Comment. */
  comment: string;

  /** Is-visible-on-storefront flag value. */
  is_visible_on_front: number;

  /** Created-at timestamp. */
  created_at?: string;

  /** Invoice ID. */
  entity_id?: number;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceCommentInterface
 */
export type SalesDataInvoiceCommentExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceInterface
 */
export interface SalesDataInvoiceExtensionInterface {
  /** Order address interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
  vertex_tax_calculation_shipping_address?: SalesDataOrderAddressInterface;

  /** Order address interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
  vertex_tax_calculation_billing_address?: SalesDataOrderAddressInterface;

  /** Order interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer. */
  vertex_tax_calculation_order?: SalesDataOrderInterface;
  gw_base_price?: string;
  gw_price?: string;
  gw_items_base_price?: string;
  gw_items_price?: string;
  gw_card_base_price?: string;
  gw_card_price?: string;
  gw_base_tax_amount?: string;
  gw_tax_amount?: string;
  gw_items_base_tax_amount?: string;
  gw_items_tax_amount?: string;
  gw_card_base_tax_amount?: string;
  gw_card_tax_amount?: string;
}

/**
 * Invoice search result interface. An invoice is a record of the receipt of payment for an order.
 */
export interface SalesDataInvoiceSearchResultInterface {
  /** Array of collection items. */
  items: SalesDataInvoiceInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Invoice comment search result interface. An invoice is a record of the receipt of payment for an order. An invoice can include comments that detail the invoice history.
 */
export interface SalesDataInvoiceCommentSearchResultInterface {
  /** Array of collection items. */
  items: SalesDataInvoiceCommentInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Interface CreditmemoItemCreationInterface
 */
export interface SalesDataCreditmemoItemCreationInterface {
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoItemCreationInterface */
  extension_attributes?: SalesDataCreditmemoItemCreationExtensionInterface;

  /** Order item ID. */
  order_item_id: number;

  /** Quantity. */
  qty: number;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoItemCreationInterface
 */
export type SalesDataCreditmemoItemCreationExtensionInterface = object;

/**
 * Interface CreditmemoCommentCreationInterface
 */
export interface SalesDataCreditmemoCommentCreationInterface {
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoCommentCreationInterface */
  extension_attributes?: SalesDataCreditmemoCommentCreationExtensionInterface;

  /** Comment. */
  comment: string;

  /** Is-visible-on-storefront flag value. */
  is_visible_on_front: number;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoCommentCreationInterface
 */
export type SalesDataCreditmemoCommentCreationExtensionInterface = object;

/**
 * Interface CreditmemoCreationArgumentsInterface
 */
export interface SalesDataCreditmemoCreationArgumentsInterface {
  /** Credit memo shipping amount. */
  shipping_amount?: number;

  /** Credit memo positive adjustment. */
  adjustment_positive?: number;

  /** Credit memo negative adjustment. */
  adjustment_negative?: number;

  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoCreationArgumentsInterface */
  extension_attributes?: SalesDataCreditmemoCreationArgumentsExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoCreationArgumentsInterface
 */
export interface SalesDataCreditmemoCreationArgumentsExtensionInterface {
  return_to_stock_items?: number[];
}

/**
 * Credit memo comment search result interface. After a customer places and pays for an order and an invoice has been issued, the merchant can create a credit memo to refund all or part of the amount paid for any returned or undelivered items. The memo restores funds to the customer account so that the customer can make future purchases. A credit memo usually includes comments that detail why the credit memo amount was credited to the customer.
 */
export interface SalesDataCreditmemoCommentSearchResultInterface {
  /** Array of collection items. */
  items: SalesDataCreditmemoCommentInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Credit memo comment interface. After a customer places and pays for an order and an invoice has been issued, the merchant can create a credit memo to refund all or part of the amount paid for any returned or undelivered items. The memo restores funds to the customer account so that the customer can make future purchases. A credit memo usually includes comments that detail why the credit memo amount was credited to the customer.
 */
export interface SalesDataCreditmemoCommentInterface {
  /** Comment. */
  comment: string;

  /** Created-at timestamp. */
  created_at?: string;

  /** Credit memo ID. */
  entity_id?: number;

  /** Is-customer-notified flag value. */
  is_customer_notified: number;

  /** Is-visible-on-storefront flag value. */
  is_visible_on_front: number;

  /** Parent ID. */
  parent_id: number;

  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoCommentInterface */
  extension_attributes?: SalesDataCreditmemoCommentExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoCommentInterface
 */
export type SalesDataCreditmemoCommentExtensionInterface = object;

/**
 * Credit memo interface. After a customer places and pays for an order and an invoice has been issued, the merchant can create a credit memo to refund all or part of the amount paid for any returned or undelivered items. The memo restores funds to the customer account so that the customer can make future purchases.
 */
export interface SalesDataCreditmemoInterface {
  /** Credit memo adjustment. */
  adjustment?: number;

  /** Credit memo negative adjustment. */
  adjustment_negative?: number;

  /** Credit memo positive adjustment. */
  adjustment_positive?: number;

  /** Credit memo base adjustment. */
  base_adjustment?: number;

  /** Credit memo negative base adjustment. */
  base_adjustment_negative?: number;

  /** Credit memo positive base adjustment. */
  base_adjustment_positive?: number;

  /** Credit memo base currency code. */
  base_currency_code?: string;

  /** Credit memo base discount amount. */
  base_discount_amount?: number;

  /** Credit memo base grand total. */
  base_grand_total?: number;

  /** Credit memo base discount tax compensation amount. */
  base_discount_tax_compensation_amount?: number;

  /** Credit memo base shipping amount. */
  base_shipping_amount?: number;

  /** Credit memo base shipping discount tax compensation amount. */
  base_shipping_discount_tax_compensation_amnt?: number;

  /** Credit memo base shipping including tax. */
  base_shipping_incl_tax?: number;

  /** Credit memo base shipping tax amount. */
  base_shipping_tax_amount?: number;

  /** Credit memo base subtotal. */
  base_subtotal?: number;

  /** Credit memo base subtotal including tax. */
  base_subtotal_incl_tax?: number;

  /** Credit memo base tax amount. */
  base_tax_amount?: number;

  /** Credit memo base-to-global rate. */
  base_to_global_rate?: number;

  /** Credit memo base-to-order rate. */
  base_to_order_rate?: number;

  /** Credit memo billing address ID. */
  billing_address_id?: number;

  /** Credit memo created-at timestamp. */
  created_at?: string;

  /** Credit memo status. */
  creditmemo_status?: number;

  /** Credit memo discount amount. */
  discount_amount?: number;

  /** Credit memo discount description. */
  discount_description?: string;

  /** Credit memo email sent flag value. */
  email_sent?: number;

  /** Credit memo ID. */
  entity_id?: number;

  /** Credit memo global currency code. */
  global_currency_code?: string;

  /** Credit memo grand total. */
  grand_total?: number;

  /** Credit memo discount tax compensation amount. */
  discount_tax_compensation_amount?: number;

  /** Credit memo increment ID. */
  increment_id?: string;

  /** Credit memo invoice ID. */
  invoice_id?: number;

  /** Credit memo order currency code. */
  order_currency_code?: string;

  /** Credit memo order ID. */
  order_id: number;

  /** Credit memo shipping address ID. */
  shipping_address_id?: number;

  /** Credit memo shipping amount. */
  shipping_amount?: number;

  /** Credit memo shipping discount tax compensation amount. */
  shipping_discount_tax_compensation_amount?: number;

  /** Credit memo shipping including tax. */
  shipping_incl_tax?: number;

  /** Credit memo shipping tax amount. */
  shipping_tax_amount?: number;

  /** Credit memo state. */
  state?: number;

  /** Credit memo store currency code. */
  store_currency_code?: string;

  /** Credit memo store ID. */
  store_id?: number;

  /** Credit memo store-to-base rate. */
  store_to_base_rate?: number;

  /** Credit memo store-to-order rate. */
  store_to_order_rate?: number;

  /** Credit memo subtotal. */
  subtotal?: number;

  /** Credit memo subtotal including tax. */
  subtotal_incl_tax?: number;

  /** Credit memo tax amount. */
  tax_amount?: number;

  /** Credit memo transaction ID. */
  transaction_id?: string;

  /** Credit memo updated-at timestamp. */
  updated_at?: string;

  /** Array of credit memo items. */
  items: SalesDataCreditmemoItemInterface[];

  /** Array of any credit memo comments. Otherwise, null. */
  comments?: SalesDataCreditmemoCommentInterface[];

  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoInterface */
  extension_attributes?: SalesDataCreditmemoExtensionInterface;
}

/**
 * Credit memo item interface. After a customer places and pays for an order and an invoice has been issued, the merchant can create a credit memo to refund all or part of the amount paid for any returned or undelivered items. The memo restores funds to the customer account so that the customer can make future purchases. A credit memo item is an invoiced item for which a merchant creates a credit memo.
 */
export interface SalesDataCreditmemoItemInterface {
  /** Additional data. */
  additional_data?: string;

  /** The base cost for a credit memo item. */
  base_cost: number;

  /** The base discount amount for a credit memo item. */
  base_discount_amount?: number;

  /** The base discount tax compensation amount for a credit memo item. */
  base_discount_tax_compensation_amount?: number;

  /** The base price for a credit memo item. */
  base_price: number;

  /** Base price including tax. */
  base_price_incl_tax?: number;

  /** Base row total. */
  base_row_total?: number;

  /** Base row total including tax. */
  base_row_total_incl_tax?: number;

  /** Base tax amount. */
  base_tax_amount?: number;

  /** Base WEEE tax applied amount. */
  base_weee_tax_applied_amount?: number;

  /** Base WEEE tax applied row amount. */
  base_weee_tax_applied_row_amnt?: number;

  /** Base WEEE tax disposition. */
  base_weee_tax_disposition?: number;

  /** Base WEEE tax row disposition. */
  base_weee_tax_row_disposition?: number;

  /** Description. */
  description?: string;

  /** Discount amount. */
  discount_amount?: number;

  /** Credit memo item ID. */
  entity_id: number;

  /** Discount tax compensation amount. */
  discount_tax_compensation_amount?: number;

  /** Name. */
  name?: string;

  /** Order item ID. */
  order_item_id: number;

  /** Parent ID. */
  parent_id?: number;

  /** Price. */
  price?: number;

  /** Price including tax. */
  price_incl_tax?: number;

  /** Product ID. */
  product_id?: number;

  /** Quantity. */
  qty: number;

  /** Row total. */
  row_total?: number;

  /** Row total including tax. */
  row_total_incl_tax?: number;

  /** SKU. */
  sku?: string;

  /** Tax amount. */
  tax_amount?: number;

  /** WEEE tax applied. */
  weee_tax_applied?: string;

  /** WEEE tax applied amount. */
  weee_tax_applied_amount?: number;

  /** WEEE tax applied row amount. */
  weee_tax_applied_row_amount?: number;

  /** WEEE tax disposition. */
  weee_tax_disposition?: number;

  /** WEEE tax row disposition. */
  weee_tax_row_disposition?: number;

  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoItemInterface */
  extension_attributes?: SalesDataCreditmemoItemExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoItemInterface
 */
export interface SalesDataCreditmemoItemExtensionInterface {
  vertex_tax_codes?: string[];
  invoice_text_codes?: string[];
  tax_codes?: string[];
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoInterface
 */
export interface SalesDataCreditmemoExtensionInterface {
  gw_base_price?: string;
  gw_price?: string;
  gw_items_base_price?: string;
  gw_items_price?: string;
  gw_card_base_price?: string;
  gw_card_price?: string;
  gw_base_tax_amount?: string;
  gw_tax_amount?: string;
  gw_items_base_tax_amount?: string;
  gw_items_tax_amount?: string;
  gw_card_base_tax_amount?: string;
  gw_card_tax_amount?: string;
}

/**
 * Credit memo search result interface. After a customer places and pays for an order and an invoice has been issued, the merchant can create a credit memo to refund all or part of the amount paid for any returned or undelivered items. The memo restores funds to the customer account so that the customer can make future purchases.
 */
export interface SalesDataCreditmemoSearchResultInterface {
  /** Array of collection items. */
  items: SalesDataCreditmemoInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Shipment interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package.
 */
export interface SalesDataShipmentInterface {
  /** Billing address ID. */
  billing_address_id?: number;

  /** Created-at timestamp. */
  created_at?: string;

  /** Customer ID. */
  customer_id?: number;

  /** Email-sent flag value. */
  email_sent?: number;

  /** Shipment ID. */
  entity_id?: number;

  /** Increment ID. */
  increment_id?: string;

  /** Order ID. */
  order_id: number;

  /** Array of packages, if any. Otherwise, null. */
  packages?: SalesDataShipmentPackageInterface[];

  /** Shipment status. */
  shipment_status?: number;

  /** Shipping address ID. */
  shipping_address_id?: number;

  /** Shipping label. */
  shipping_label?: string;

  /** Store ID. */
  store_id?: number;

  /** Total quantity. */
  total_qty?: number;

  /** Total weight. */
  total_weight?: number;

  /** Updated-at timestamp. */
  updated_at?: string;

  /** Array of items. */
  items: SalesDataShipmentItemInterface[];

  /** Array of tracks. */
  tracks: SalesDataShipmentTrackInterface[];

  /** Array of comments. */
  comments: SalesDataShipmentCommentInterface[];

  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentInterface */
  extension_attributes?: SalesDataShipmentExtensionInterface;
}

/**
 * Shipment package interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package.
 */
export interface SalesDataShipmentPackageInterface {
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentPackageInterface */
  extension_attributes?: SalesDataShipmentPackageExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentPackageInterface
 */
export type SalesDataShipmentPackageExtensionInterface = object;

/**
 * Shipment item interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package. A product is an item in a shipment.
 */
export interface SalesDataShipmentItemInterface {
  /** Additional data. */
  additional_data?: string;

  /** Description. */
  description?: string;

  /** Shipment item ID. */
  entity_id?: number;

  /** Name. */
  name?: string;

  /** Parent ID. */
  parent_id?: number;

  /** Price. */
  price?: number;

  /** Product ID. */
  product_id?: number;

  /** Row total. */
  row_total?: number;

  /** SKU. */
  sku?: string;

  /** Weight. */
  weight?: number;

  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentItemInterface */
  extension_attributes?: SalesDataShipmentItemExtensionInterface;

  /** Order item ID. */
  order_item_id: number;

  /** Quantity. */
  qty: number;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentItemInterface
 */
export type SalesDataShipmentItemExtensionInterface = object;

/**
 * Shipment track interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package. Merchants and customers can track shipments.
 */
export interface SalesDataShipmentTrackInterface {
  /** The order_id for the shipment package. */
  order_id: number;

  /** Created-at timestamp. */
  created_at?: string;

  /** Shipment package ID. */
  entity_id?: number;

  /** Parent ID. */
  parent_id: number;

  /** Updated-at timestamp. */
  updated_at?: string;

  /** Weight. */
  weight: number;

  /** Quantity. */
  qty: number;

  /** Description. */
  description: string;

  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentTrackInterface */
  extension_attributes?: SalesDataShipmentTrackExtensionInterface;

  /** Track number. */
  track_number: string;

  /** Title. */
  title: string;

  /** Carrier code. */
  carrier_code: string;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentTrackInterface
 */
export type SalesDataShipmentTrackExtensionInterface = object;

/**
 * Shipment comment interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package. A shipment document can contain comments.
 */
export interface SalesDataShipmentCommentInterface {
  /** Is-customer-notified flag value. */
  is_customer_notified: number;

  /** Parent ID. */
  parent_id: number;

  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentCommentInterface */
  extension_attributes?: SalesDataShipmentCommentExtensionInterface;

  /** Comment. */
  comment: string;

  /** Is-visible-on-storefront flag value. */
  is_visible_on_front: number;

  /** Created-at timestamp. */
  created_at?: string;

  /** Invoice ID. */
  entity_id?: number;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentCommentInterface
 */
export type SalesDataShipmentCommentExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentInterface
 */
export interface SalesDataShipmentExtensionInterface {
  source_code?: string;
}

/**
 * Shipment search result interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package.
 */
export interface SalesDataShipmentSearchResultInterface {
  /** Array of collection items. */
  items: SalesDataShipmentInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Shipment comment search result interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package. A shipment document can contain comments.
 */
export interface SalesDataShipmentCommentSearchResultInterface {
  /** Array of collection items. */
  items: SalesDataShipmentCommentInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Input argument for shipment item creation Interface ShipmentItemCreationInterface
 */
export interface SalesDataShipmentItemCreationInterface {
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentItemCreationInterface */
  extension_attributes?: SalesDataShipmentItemCreationExtensionInterface;

  /** Order item ID. */
  order_item_id: number;

  /** Quantity. */
  qty: number;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentItemCreationInterface
 */
export type SalesDataShipmentItemCreationExtensionInterface = object;

/**
 * Interface ShipmentCommentCreationInterface
 */
export interface SalesDataShipmentCommentCreationInterface {
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentCommentCreationInterface */
  extension_attributes?: SalesDataShipmentCommentCreationExtensionInterface;

  /** Comment. */
  comment: string;

  /** Is-visible-on-storefront flag value. */
  is_visible_on_front: number;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentCommentCreationInterface
 */
export type SalesDataShipmentCommentCreationExtensionInterface = object;

/**
 * Shipment Track Creation interface.
 */
export interface SalesDataShipmentTrackCreationInterface {
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentTrackCreationInterface */
  extension_attributes?: SalesDataShipmentTrackCreationExtensionInterface;

  /** Track number. */
  track_number: string;

  /** Title. */
  title: string;

  /** Carrier code. */
  carrier_code: string;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentTrackCreationInterface
 */
export type SalesDataShipmentTrackCreationExtensionInterface = object;

/**
 * Shipment package interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package.
 */
export interface SalesDataShipmentPackageCreationInterface {
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentPackageCreationInterface */
  extension_attributes?: SalesDataShipmentPackageCreationExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentPackageCreationInterface
 */
export type SalesDataShipmentPackageCreationExtensionInterface = object;

/**
 * Interface for creation arguments for Shipment.
 */
export interface SalesDataShipmentCreationArgumentsInterface {
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentCreationArgumentsInterface */
  extension_attributes?: SalesDataShipmentCreationArgumentsExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentCreationArgumentsInterface
 */
export interface SalesDataShipmentCreationArgumentsExtensionInterface {
  source_code?: string;
}

/**
 * Transaction interface. A transaction is an interaction between a merchant and a customer such as a purchase, a credit, a refund, and so on.
 */
export interface SalesDataTransactionInterface {
  /** Transaction ID. */
  transaction_id: number;

  /** The parent ID for the transaction. Otherwise, null. */
  parent_id?: number;

  /** Order ID. */
  order_id: number;

  /** Payment ID. */
  payment_id: number;

  /** Transaction business ID. */
  txn_id: string;

  /** Parent transaction business ID. */
  parent_txn_id: string;

  /** Transaction type. */
  txn_type: string;

  /** Is-closed flag value. */
  is_closed: number;

  /** Array of additional information. Otherwise, null. */
  additional_information?: string[];

  /** Created-at timestamp. */
  created_at: string;

  /** Array of child transactions. */
  child_transactions: SalesDataTransactionInterface[];

  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\TransactionInterface */
  extension_attributes?: SalesDataTransactionExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\TransactionInterface
 */
export type SalesDataTransactionExtensionInterface = object;

/**
 * Transaction search result interface. A transaction is an interaction between a merchant and a customer such as a purchase, a credit, a refund, and so on.
 */
export interface SalesDataTransactionSearchResultInterface {
  /** Array of collection items. */
  items: SalesDataTransactionInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Input argument for invoice creation Interface InvoiceItemCreationInterface
 */
export interface SalesDataInvoiceItemCreationInterface {
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceItemCreationInterface */
  extension_attributes?: SalesDataInvoiceItemCreationExtensionInterface;

  /** Order item ID. */
  order_item_id: number;

  /** Quantity. */
  qty: number;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceItemCreationInterface
 */
export type SalesDataInvoiceItemCreationExtensionInterface = object;

/**
 * Interface InvoiceCommentCreationInterface
 */
export interface SalesDataInvoiceCommentCreationInterface {
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceCommentCreationInterface */
  extension_attributes?: SalesDataInvoiceCommentCreationExtensionInterface;

  /** Comment. */
  comment: string;

  /** Is-visible-on-storefront flag value. */
  is_visible_on_front: number;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceCommentCreationInterface
 */
export type SalesDataInvoiceCommentCreationExtensionInterface = object;

/**
 * Interface for creation arguments for Invoice.
 */
export interface SalesDataInvoiceCreationArgumentsInterface {
  /** ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceCreationArgumentsInterface */
  extension_attributes?: SalesDataInvoiceCreationArgumentsExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceCreationArgumentsInterface
 */
export type SalesDataInvoiceCreationArgumentsExtensionInterface = object;

/**
 * Interface ShippingInformationInterface
 */
export interface CheckoutDataShippingInformationInterface {
  /** Interface AddressInterface */
  shipping_address: QuoteDataAddressInterface;

  /** Interface AddressInterface */
  billing_address?: QuoteDataAddressInterface;

  /** Shipping method code */
  shipping_method_code: string;

  /** Carrier code */
  shipping_carrier_code: string;

  /** ExtensionInterface class for @see \Magento\Checkout\Api\Data\ShippingInformationInterface */
  extension_attributes?: CheckoutDataShippingInformationExtensionInterface;

  /** Custom attributes values. */
  custom_attributes?: FrameworkAttributeInterface[];
}

/**
 * ExtensionInterface class for @see \Magento\Checkout\Api\Data\ShippingInformationInterface
 */
export type CheckoutDataShippingInformationExtensionInterface = object;

/**
 * Interface PaymentDetailsInterface
 */
export interface CheckoutDataPaymentDetailsInterface {
  payment_methods: QuoteDataPaymentMethodInterface[];

  /** Interface TotalsInterface */
  totals: QuoteDataTotalsInterface;

  /** ExtensionInterface class for @see \Magento\Checkout\Api\Data\PaymentDetailsInterface */
  extension_attributes?: CheckoutDataPaymentDetailsExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Checkout\Api\Data\PaymentDetailsInterface
 */
export type CheckoutDataPaymentDetailsExtensionInterface = object;

/**
 * Interface TotalsInformationInterface
 */
export interface CheckoutDataTotalsInformationInterface {
  /** Interface AddressInterface */
  address: QuoteDataAddressInterface;

  /** Shipping method code */
  shipping_method_code?: string;

  /** Carrier code */
  shipping_carrier_code?: string;

  /** ExtensionInterface class for @see \Magento\Checkout\Api\Data\TotalsInformationInterface */
  extension_attributes?: CheckoutDataTotalsInformationExtensionInterface;

  /** Custom attributes values. */
  custom_attributes?: FrameworkAttributeInterface[];
}

/**
 * ExtensionInterface class for @see \Magento\Checkout\Api\Data\TotalsInformationInterface
 */
export type CheckoutDataTotalsInformationExtensionInterface = object;

/**
 * Interface OptionTypeInterface
 */
export interface BundleDataOptionTypeInterface {
  /** Type label */
  label: string;

  /** Type code */
  code: string;

  /** ExtensionInterface class for @see \Magento\Bundle\Api\Data\OptionTypeInterface */
  extension_attributes?: BundleDataOptionTypeExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Bundle\Api\Data\OptionTypeInterface
 */
export type BundleDataOptionTypeExtensionInterface = object;

/**
 * Represents link with collected data and initialized vector for decryption.
 */
export interface AnalyticsDataLinkInterface {
  url: string;
  initialization_vector: string;
}

/**
 * Search results of Repository::getList method Used fully qualified namespaces in annotations for proper work of WebApi request parser
 */
export interface InventoryApiDataSourceSearchResultsInterface {
  /** Sources list */
  items: InventoryApiDataSourceInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Represents physical storage, i.e. brick and mortar store or warehouse Used fully qualified namespaces in annotations for proper work of WebApi request parser
 */
export interface InventoryApiDataSourceInterface {
  /** Source code */
  source_code?: string;

  /** Source name */
  name?: string;

  /** Source email */
  email?: string;

  /** Source contact name */
  contact_name?: string;

  /** If source is enabled. For new entity can be null */
  enabled?: boolean;

  /** Source description */
  description?: string;

  /** Source latitude */
  latitude?: number;

  /** Source longitude */
  longitude?: number;

  /** Source country id */
  country_id?: string;

  /** Region id if source has registered region. */
  region_id?: number;

  /** Region title if source has custom region */
  region?: string;

  /** Source city */
  city?: string;

  /** Source street name */
  street?: string;

  /** Source post code */
  postcode?: string;

  /** Source phone number */
  phone?: string;

  /** Source fax */
  fax?: string;

  /** Is need to use default config */
  use_default_carrier_config?: boolean;
  carrier_links?: InventoryApiDataSourceCarrierLinkInterface[];

  /** ExtensionInterface class for @see \Magento\InventoryApi\Api\Data\SourceInterface */
  extension_attributes?: InventoryApiDataSourceExtensionInterface;
}

/**
 * Represents relation between some physical storage and shipping method Used fully qualified namespaces in annotations for proper work of WebApi request parser
 */
export interface InventoryApiDataSourceCarrierLinkInterface {
  /** Carrier code */
  carrier_code?: string;

  /** Position */
  position?: number;

  /** ExtensionInterface class for @see \Magento\InventoryApi\Api\Data\SourceCarrierLinkInterface */
  extension_attributes?: InventoryApiDataSourceCarrierLinkExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\InventoryApi\Api\Data\SourceCarrierLinkInterface
 */
export type InventoryApiDataSourceCarrierLinkExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\InventoryApi\Api\Data\SourceInterface
 */
export interface InventoryApiDataSourceExtensionInterface {
  is_pickup_location_active?: boolean;
  frontend_name?: string;
  frontend_description?: string;
}

/**
 * Search results of Repository::getList method Used fully qualified namespaces in annotations for proper work of WebApi request parser
 */
export interface InventoryApiDataStockSearchResultsInterface {
  /** Stocks list */
  items: InventoryApiDataStockInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Represents product aggregation among some different physical storages (in technical words, it is an index) Used fully qualified namespaces in annotations for proper work of WebApi request parser
 */
export interface InventoryApiDataStockInterface {
  /** Stock id */
  stock_id?: number;

  /** Stock name */
  name?: string;

  /** TODO: temporal fix of extension classes generation during installation ExtensionInterface class for @see \Magento\InventoryApi\Api\Data\StockInterface */
  extension_attributes?: InventoryApiDataStockExtensionInterface;
}

/**
 * TODO: temporal fix of extension classes generation during installation ExtensionInterface class for @see \Magento\InventoryApi\Api\Data\StockInterface
 */
export interface InventoryApiDataStockExtensionInterface {
  sales_channels?: InventorySalesApiDataSalesChannelInterface[];
}

/**
 * Represents sales channels (which are a linkage between stocks and websites, customer groups, etc.) Used fully qualified namespaces in annotations for proper work of WebApi request parser
 */
export interface InventorySalesApiDataSalesChannelInterface {
  /** Sales channel type */
  type?: string;

  /** Sales channel code */
  code?: string;

  /** ExtensionInterface class for @see \Magento\InventorySalesApi\Api\Data\SalesChannelInterface */
  extension_attributes?: InventorySalesApiDataSalesChannelExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\InventorySalesApi\Api\Data\SalesChannelInterface
 */
export type InventorySalesApiDataSalesChannelExtensionInterface = object;

/**
 * Search results of Repository::getList method Used fully qualified namespaces in annotations for proper work of WebApi request parser
 */
export interface InventoryApiDataStockSourceLinkSearchResultsInterface {
  /** StockSourceLink list */
  items: InventoryApiDataStockSourceLinkInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Represents relation between Stock and Source entities. Used fully qualified namespaces in annotations for proper work of WebApi request parser
 */
export interface InventoryApiDataStockSourceLinkInterface {
  /** Stock id */
  stock_id?: number;

  /** Source code of the link */
  source_code?: string;

  /** Priority of the link */
  priority?: number;

  /** ExtensionInterface class for @see \Magento\InventoryApi\Api\Data\StockSourceLinkInterface */
  extension_attributes?: InventoryApiDataStockSourceLinkExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\InventoryApi\Api\Data\StockSourceLinkInterface
 */
export type InventoryApiDataStockSourceLinkExtensionInterface = object;

/**
 * Search results of Repository::getList method Used fully qualified namespaces in annotations for proper work of WebApi request parser
 */
export interface InventoryApiDataSourceItemSearchResultsInterface {
  /** Source items list */
  items: InventoryApiDataSourceItemInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Represents amount of product on physical storage Entity id getter is missed because entity identifies by compound identifier (sku and source_code) Used fully qualified namespaces in annotations for proper work of WebApi request parser
 */
export interface InventoryApiDataSourceItemInterface {
  /** Source item sku */
  sku?: string;

  /** Source code */
  source_code?: string;

  /** Source item quantity */
  quantity?: number;

  /** Source item status (One of self::STATUS_*) */
  status?: number;

  /** ExtensionInterface class for @see \Magento\InventoryApi\Api\Data\SourceItemInterface */
  extension_attributes?: InventoryApiDataSourceItemExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\InventoryApi\Api\Data\SourceItemInterface
 */
export type InventoryApiDataSourceItemExtensionInterface = object;

/**
 * Specifies item and quantity for partial inventory transfer.
 */
export interface InventoryCatalogApiDataPartialInventoryTransferItemInterface {
  sku: string;
  qty: number;
}

/**
 * DTO for latitude and longitude request
 */
export interface InventoryDistanceBasedSourceSelectionApiDataLatLngInterface {
  /** Latitude */
  lat: number;

  /** Longitude */
  lng: number;
}

/**
 * Interface for ExportStockSalableQtySearchResult
 */
export interface InventoryExportStockApiDataExportStockSalableQtySearchResultInterface {
  items: FrameworkExtensibleDataInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Interface for entities which can be extended with extension attributes.
 */
export type FrameworkExtensibleDataInterface = object;

/**
 * Class ExportStockIndexDataResultInterface for result Inventory stock index dump export
 */
export interface InventoryExportStockApiDataProductStockIndexDataInterface {
  /** Product SKU */
  sku: string;

  /** Product QTY */
  qty: number;

  /** Product is salable flag */
  is_salable: boolean;
}

/**
 * Represents "is product salable" result interface.
 */
export interface InventorySalesApiDataIsProductSalableResultInterface {
  /** Product sku from result. */
  sku: string;

  /** Stock id from result. */
  stock_id: number;

  /** Is salable result. */
  salable: boolean;

  /** ExtensionInterface class for @see \Magento\InventorySalesApi\Api\Data\IsProductSalableResultInterface */
  extension_attributes?: InventorySalesApiDataIsProductSalableResultExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\InventorySalesApi\Api\Data\IsProductSalableResultInterface
 */
export type InventorySalesApiDataIsProductSalableResultExtensionInterface = object;

/**
 * Represents result of service Magento\InventorySalesApi\Api\IsProductSalableForRequestedQtyInterface::execute
 */
export interface InventorySalesApiDataProductSalableResultInterface {
  salable: boolean;
  errors: InventorySalesApiDataProductSalabilityErrorInterface[];

  /** ExtensionInterface class for @see \Magento\InventorySalesApi\Api\Data\ProductSalableResultInterface */
  extension_attributes?: InventorySalesApiDataProductSalableResultExtensionInterface;
}

export interface InventorySalesApiDataProductSalabilityErrorInterface {
  code: string;
  message: string;

  /** ExtensionInterface class for @see \Magento\InventorySalesApi\Api\Data\ProductSalabilityErrorInterface */
  extension_attributes?: InventorySalesApiDataProductSalabilityErrorExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\InventorySalesApi\Api\Data\ProductSalabilityErrorInterface
 */
export type InventorySalesApiDataProductSalabilityErrorExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\InventorySalesApi\Api\Data\ProductSalableResultInterface
 */
export type InventorySalesApiDataProductSalableResultExtensionInterface = object;

/**
 * Represents "is product salable for requested quantity" result interface.
 */
export interface InventorySalesApiDataIsProductSalableForRequestedQtyResultInterface {
  /** Product sku from result. */
  sku: string;

  /** Stock id from result. */
  stock_id: number;

  /** Is salable result. */
  salable: boolean;

  /** Errors from result. */
  errors: InventorySalesApiDataProductSalabilityErrorInterface[];

  /** ExtensionInterface class for @see \Magento\InventorySalesApi\Api\Data\IsProductSalableForRequestedQtyResultInterface */
  extension_attributes?: InventorySalesApiDataIsProductSalableForRequestedQtyResultExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\InventorySalesApi\Api\Data\IsProductSalableForRequestedQtyResultInterface
 */
export type InventorySalesApiDataIsProductSalableForRequestedQtyResultExtensionInterface = object;

/**
 * Search results for providing pickup locations.
 */
export interface InventoryInStorePickupApiDataSearchResultInterface {
  /** Items list. */
  items: InventoryInStorePickupApiDataPickupLocationInterface[];

  /** Endpoint used to search Pickup Locations by different parameters: - by attribute filters fields @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\FiltersInterface - by distance to the address @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\AreaInterface Also, endpoint supports paging and sort orders. */
  search_request: InventoryInStorePickupApiDataSearchRequestInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Represents sources projection on In-Store Pickup context. Realisation must follow immutable DTO concept. Partial immutability done according to restriction of current Extension Attributes implementation.
 */
export interface InventoryInStorePickupApiDataPickupLocationInterface {
  /** Source code of Pickup Location. */
  pickup_location_code: string;

  /** Pickup Location name. */
  name?: string;

  /** Pickup Location contact email. */
  email?: string;

  /** Fax contact info. */
  fax?: string;

  /** Pickup Location contact name. */
  contact_name?: string;

  /** Pickup Location description. */
  description?: string;

  /** Pickup Location latitude. */
  latitude?: number;

  /** Pickup Location longitude. */
  longitude?: number;

  /** Pickup Location country ID. */
  country_id?: string;

  /** Pickup Location region ID. */
  region_id?: number;

  /** Pickup Location region. */
  region?: string;

  /** Pickup Location city. */
  city?: string;

  /** Pickup Location street. */
  street?: string;

  /** Pickup Location postcode. */
  postcode?: string;

  /** Pickup Location phone. */
  phone?: string;

  /** ExtensionInterface class for @see \Magento\InventoryInStorePickupApi\Api\Data\PickupLocationInterface */
  extension_attributes?: InventoryInStorePickupApiDataPickupLocationExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\InventoryInStorePickupApi\Api\Data\PickupLocationInterface
 */
export type InventoryInStorePickupApiDataPickupLocationExtensionInterface = object;

/**
 * Endpoint used to search Pickup Locations by different parameters: - by attribute filters fields @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\FiltersInterface - by distance to the address @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\AreaInterface Also, endpoint supports paging and sort orders.
 */
export interface InventoryInStorePickupApiDataSearchRequestInterface {
  /** Filter by Distance to the Address. Pickup Locations will be filtered by distance according to the geo-position of the entered address. Required fields for the address are country and one of the field: region or city or postcode. */
  area?: InventoryInStorePickupApiDataSearchRequestAreaInterface;

  /** Filter to filter by Fields. Each field may be filtered with different condition type. Supported condition types restricted by @see \Magento\Framework\Api\SearchCriteriaInterface */
  filters?: InventoryInStorePickupApiDataSearchRequestFiltersInterface;

  /** Page size. */
  page_size?: number;

  /** Current page. */
  current_page: number;

  /** Sales Channel Type. */
  scope_type: string;

  /** Sales Channel code. */
  scope_code: string;

  /** Sort Order. */
  sort?: FrameworkSortOrder[];

  /** ExtensionInterface class for @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequestInterface */
  extension_attributes?: InventoryInStorePickupApiDataSearchRequestExtensionInterface;
}

/**
 * Filter by Distance to the Address. Pickup Locations will be filtered by distance according to the geo-position of the entered address. Required fields for the address are country and one of the field: region or city or postcode.
 */
export interface InventoryInStorePickupApiDataSearchRequestAreaInterface {
  /** Search radius in KM. */
  radius: number;

  /** Search term string. */
  search_term: string;
}

/**
 * Filter to filter by Fields. Each field may be filtered with different condition type. Supported condition types restricted by @see \Magento\Framework\Api\SearchCriteriaInterface
 */
export interface InventoryInStorePickupApiDataSearchRequestFiltersInterface {
  /** Filter for Pickup Location search. */
  country?: InventoryInStorePickupApiDataSearchRequestFilterInterface;

  /** Filter for Pickup Location search. */
  postcode?: InventoryInStorePickupApiDataSearchRequestFilterInterface;

  /** Filter for Pickup Location search. */
  region?: InventoryInStorePickupApiDataSearchRequestFilterInterface;

  /** Filter for Pickup Location search. */
  region_id?: InventoryInStorePickupApiDataSearchRequestFilterInterface;

  /** Filter for Pickup Location search. */
  city?: InventoryInStorePickupApiDataSearchRequestFilterInterface;

  /** Filter for Pickup Location search. */
  street?: InventoryInStorePickupApiDataSearchRequestFilterInterface;

  /** Filter for Pickup Location search. */
  name?: InventoryInStorePickupApiDataSearchRequestFilterInterface;

  /** Filter for Pickup Location search. */
  pickup_location_code?: InventoryInStorePickupApiDataSearchRequestFilterInterface;
}

/**
 * Filter for Pickup Location search.
 */
export interface InventoryInStorePickupApiDataSearchRequestFilterInterface {
  /** Value. */
  value: string;

  /** Condition Type. */
  condition_type: string;
}

/**
 * ExtensionInterface class for @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequestInterface
 */
export interface InventoryInStorePickupApiDataSearchRequestExtensionInterface {
  products_info?: InventoryInStorePickupApiDataSearchRequestProductInfoInterface[];
}

/**
 * Product Info Data Transfer Object.
 */
export interface InventoryInStorePickupApiDataSearchRequestProductInfoInterface {
  /** Product SKU. */
  sku: string;

  /** ExtensionInterface class for @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\ProductInfoInterface */
  extension_attributes?: InventoryInStorePickupApiDataSearchRequestProductInfoExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\InventoryInStorePickupApi\Api\Data\SearchRequest\ProductInfoInterface
 */
export type InventoryInStorePickupApiDataSearchRequestProductInfoExtensionInterface = object;

/**
 * Data Interface representing particular Source Selection Algorithm
 */
export interface InventorySourceSelectionApiDataSourceSelectionAlgorithmInterface {
  code: string;
  title: string;
  description: string;

  /** ExtensionInterface class for @see \Magento\InventorySourceSelectionApi\Api\Data\SourceSelectionAlgorithmInterface */
  extension_attributes?: InventorySourceSelectionApiDataSourceSelectionAlgorithmExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\InventorySourceSelectionApi\Api\Data\SourceSelectionAlgorithmInterface
 */
export type InventorySourceSelectionApiDataSourceSelectionAlgorithmExtensionInterface = object;

/**
 * Request products in a given Qty and StockId
 */
export interface InventorySourceSelectionApiDataInventoryRequestInterface {
  /** Stock Id */
  stock_id: number;

  /** Items */
  items: InventorySourceSelectionApiDataItemRequestInterface[];

  /** ExtensionInterface class for @see \Magento\InventorySourceSelectionApi\Api\Data\InventoryRequestInterface */
  extension_attributes?: InventorySourceSelectionApiDataInventoryRequestExtensionInterface;
}

/**
 * Represents requested quantity for particular product
 */
export interface InventorySourceSelectionApiDataItemRequestInterface {
  /** SKU */
  sku: string;

  /** Product Quantity */
  qty: number;

  /** ExtensionInterface class for @see \Magento\InventorySourceSelectionApi\Api\Data\ItemRequestInterface */
  extension_attributes?: InventorySourceSelectionApiDataItemRequestExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\InventorySourceSelectionApi\Api\Data\ItemRequestInterface
 */
export type InventorySourceSelectionApiDataItemRequestExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\InventorySourceSelectionApi\Api\Data\InventoryRequestInterface
 */
export interface InventorySourceSelectionApiDataInventoryRequestExtensionInterface {
  /** Data interface for shipping source or shipping destination */
  destination_address?: InventorySourceSelectionApiDataAddressInterface;
}

/**
 * Data interface for shipping source or shipping destination
 */
export interface InventorySourceSelectionApiDataAddressInterface {
  /** Shipping country */
  country: string;

  /** Shipping postcode */
  postcode: string;

  /** Shipping street address */
  street: string;

  /** Shipping region */
  region: string;

  /** Shipping city */
  city: string;
}

/**
 * Result of how we will deduct product qty from different Sources
 */
export interface InventorySourceSelectionApiDataSourceSelectionResultInterface {
  source_selection_items: InventorySourceSelectionApiDataSourceSelectionItemInterface[];
  shippable: boolean;

  /** ExtensionInterface class for @see \Magento\InventorySourceSelectionApi\Api\Data\SourceSelectionResultInterface */
  extension_attributes?: InventorySourceSelectionApiDataSourceSelectionResultExtensionInterface;
}

/**
 * Represents source selection result for the specific source and SKU
 */
export interface InventorySourceSelectionApiDataSourceSelectionItemInterface {
  /** Source code */
  source_code: string;

  /** Item SKU */
  sku: string;

  /** Quantity which will be deducted for this source */
  qty_to_deduct: number;

  /** Available quantity for this source */
  qty_available: number;

  /** ExtensionInterface class for @see \Magento\InventorySourceSelectionApi\Api\Data\SourceSelectionItemInterface */
  extension_attributes?: InventorySourceSelectionApiDataSourceSelectionItemExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\InventorySourceSelectionApi\Api\Data\SourceSelectionItemInterface
 */
export type InventorySourceSelectionApiDataSourceSelectionItemExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\InventorySourceSelectionApi\Api\Data\SourceSelectionResultInterface
 */
export type InventorySourceSelectionApiDataSourceSelectionResultExtensionInterface = object;

/**
 * Operation result object that contains status of the operation.
 */
export interface InventoryInStorePickupSalesApiDataResultInterface {
  /** Operation result successful. */
  successful: boolean;

  /** Error information for failed operations. */
  errors: string[];

  /** ExtensionInterface class for @see \Magento\InventoryInStorePickupSalesApi\Api\Data\ResultInterface */
  extension_attributes?: InventoryInStorePickupSalesApiDataResultExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\InventoryInStorePickupSalesApi\Api\Data\ResultInterface
 */
export type InventoryInStorePickupSalesApiDataResultExtensionInterface = object;

/**
 * Represents a Source Item Configuration object Used fully qualified namespaces in annotations for proper work of WebApi request parser
 */
export interface InventoryLowQuantityNotificationApiDataSourceItemConfigurationInterface {
  /** Source code */
  source_code?: string;

  /** Notify stock qty */
  notify_stock_qty?: number;

  /** SKU */
  sku?: string;

  /** ExtensionInterface class for @see \Magento\InventoryLowQuantityNotificationApi\Api\Data\SourceItemConfigurationInterface */
  extension_attributes?: InventoryLowQuantityNotificationApiDataSourceItemConfigurationExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\InventoryLowQuantityNotificationApi\Api\Data\SourceItemConfigurationInterface
 */
export type InventoryLowQuantityNotificationApiDataSourceItemConfigurationExtensionInterface = object;

/**
 * Adobe Stock Asset data class interface
 */
export interface AdobeStockAssetApiDataAssetInterface {
  /** ID */
  id?: number;

  /** Media gallery asset id */
  media_gallery_id: number;

  /** Category */
  category_id?: number;

  /** Adobe Stock asset Category data class */
  category?: AdobeStockAssetApiDataCategoryInterface;

  /** The creator */
  creator_id?: number;

  /** Adobe Stock creator data class */
  creator?: AdobeStockAssetApiDataCreatorInterface;

  /** Licensed */
  is_licensed: number;

  /** Creation date */
  creation_date: string;

  /** ExtensionInterface class for @see \Magento\AdobeStockAssetApi\Api\Data\AssetInterface */
  extension_attributes?: AdobeStockAssetApiDataAssetExtensionInterface;
}

/**
 * Adobe Stock asset Category data class
 */
export interface AdobeStockAssetApiDataCategoryInterface {
  /** The id */
  id?: number;

  /** The category name */
  name: string;

  /** ExtensionInterface class for @see \Magento\AdobeStockAssetApi\Api\Data\CategoryInterface */
  extension_attributes: AdobeStockAssetApiDataCategoryExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\AdobeStockAssetApi\Api\Data\CategoryInterface
 */
export type AdobeStockAssetApiDataCategoryExtensionInterface = object;

/**
 * Adobe Stock creator data class
 */
export interface AdobeStockAssetApiDataCreatorInterface {
  /** The id */
  id?: number;

  /** The creator name */
  name?: string;

  /** ExtensionInterface class for @see \Magento\AdobeStockAssetApi\Api\Data\CreatorInterface */
  extension_attributes: AdobeStockAssetApiDataCreatorExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\AdobeStockAssetApi\Api\Data\CreatorInterface
 */
export type AdobeStockAssetApiDataCreatorExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\AdobeStockAssetApi\Api\Data\AssetInterface
 */
export type AdobeStockAssetApiDataAssetExtensionInterface = object;

/**
 * Interface AssetSearchResultsInterface
 */
export interface AdobeStockAssetApiDataAssetSearchResultsInterface {
  /** Assets list. */
  items: AdobeStockAssetApiDataAssetInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Interface RuleInterface
 */
export interface SalesRuleDataRuleInterface {
  /** Rule id */
  rule_id?: number;

  /** Rule name */
  name?: string;

  /** Display label */
  store_labels?: SalesRuleDataRuleLabelInterface[];

  /** Description */
  description?: string;

  /** A list of websites the rule applies to */
  website_ids: number[];

  /** Ids of customer groups that the rule applies to */
  customer_group_ids: number[];

  /** The start date when the coupon is active */
  from_date?: string;

  /** The end date when the coupon is active */
  to_date?: string;

  /** Number of uses per customer */
  uses_per_customer: number;

  /** The coupon is active */
  is_active: boolean;

  /** Interface ConditionInterface */
  condition?: SalesRuleDataConditionInterface;

  /** Interface ConditionInterface */
  action_condition?: SalesRuleDataConditionInterface;

  /** To stop rule processing */
  stop_rules_processing: boolean;

  /** Is this field needed */
  is_advanced: boolean;

  /** Product ids */
  product_ids?: number[];

  /** Sort order */
  sort_order: number;

  /** Simple action of the rule */
  simple_action?: string;

  /** Discount amount */
  discount_amount: number;

  /** Maximum qty discount is applied */
  discount_qty?: number;

  /** Discount step */
  discount_step: number;

  /** The rule applies to shipping */
  apply_to_shipping: boolean;

  /** How many times the rule has been used */
  times_used: number;

  /** Whether the rule is in RSS */
  is_rss: boolean;

  /** Coupon type */
  coupon_type: string;

  /** To auto generate coupon */
  use_auto_generation: boolean;

  /** Limit of uses per coupon */
  uses_per_coupon: number;

  /** To grant free shipping */
  simple_free_shipping?: string;

  /** ExtensionInterface class for @see \Magento\SalesRule\Api\Data\RuleInterface */
  extension_attributes?: SalesRuleDataRuleExtensionInterface;
}

/**
 * Interface RuleLabelInterface
 */
export interface SalesRuleDataRuleLabelInterface {
  /** StoreId */
  store_id: number;

  /** The label for the store */
  store_label: string;

  /** ExtensionInterface class for @see \Magento\SalesRule\Api\Data\RuleLabelInterface */
  extension_attributes?: SalesRuleDataRuleLabelExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\SalesRule\Api\Data\RuleLabelInterface
 */
export type SalesRuleDataRuleLabelExtensionInterface = object;

/**
 * Interface ConditionInterface
 */
export interface SalesRuleDataConditionInterface {
  /** Condition type */
  condition_type: string;

  /** List of conditions */
  conditions?: SalesRuleDataConditionInterface[];

  /** The aggregator type */
  aggregator_type?: string;

  /** The operator of the condition */
  operator: string;

  /** The attribute name of the condition */
  attribute_name?: string;

  /** The value of the condition */
  value: string;

  /** ExtensionInterface class for @see \Magento\SalesRule\Api\Data\ConditionInterface */
  extension_attributes?: SalesRuleDataConditionExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\SalesRule\Api\Data\ConditionInterface
 */
export type SalesRuleDataConditionExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\SalesRule\Api\Data\RuleInterface
 */
export type SalesRuleDataRuleExtensionInterface = object;

export interface SalesRuleDataRuleSearchResultInterface {
  /** Rules. */
  items: SalesRuleDataRuleInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Interface CouponInterface
 */
export interface SalesRuleDataCouponInterface {
  /** Coupon id */
  coupon_id?: number;

  /** The id of the rule associated with the coupon */
  rule_id: number;

  /** Coupon code */
  code?: string;

  /** Usage limit */
  usage_limit?: number;

  /** Usage limit per customer */
  usage_per_customer?: number;

  /** The number of times the coupon has been used */
  times_used: number;

  /** Expiration date */
  expiration_date?: string;

  /** The coupon is primary coupon for the rule that it's associated with */
  is_primary: boolean;

  /** When the coupon is created */
  created_at?: string;

  /** Of coupon */
  type?: number;

  /** ExtensionInterface class for @see \Magento\SalesRule\Api\Data\CouponInterface */
  extension_attributes?: SalesRuleDataCouponExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\SalesRule\Api\Data\CouponInterface
 */
export interface SalesRuleDataCouponExtensionInterface {
  ddg_extension_attributes?: DotdigitalgroupEmailDataCouponAttributeInterface;
}

export interface DotdigitalgroupEmailDataCouponAttributeInterface {
  email?: string;
  expires_at?: string;
}

export interface SalesRuleDataCouponSearchResultInterface {
  /** Rules. */
  items: SalesRuleDataCouponInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * CouponGenerationSpecInterface
 */
export interface SalesRuleDataCouponGenerationSpecInterface {
  /** The id of the rule associated with the coupon */
  rule_id: number;

  /** Format of generated coupon code */
  format: string;

  /** Of coupons to generate */
  quantity: number;

  /** Length of coupon code */
  length: number;

  /** The prefix */
  prefix?: string;

  /** The suffix */
  suffix?: string;

  /** The spacing where the delimiter should exist */
  delimiter_at_every?: number;

  /** The delimiter */
  delimiter?: string;

  /** ExtensionInterface class for @see \Magento\SalesRule\Api\Data\CouponGenerationSpecInterface */
  extension_attributes?: SalesRuleDataCouponGenerationSpecExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\SalesRule\Api\Data\CouponGenerationSpecInterface
 */
export type SalesRuleDataCouponGenerationSpecExtensionInterface = object;

/**
 * Coupon mass delete results interface.
 */
export interface SalesRuleDataCouponMassDeleteResultInterface {
  /** List of failed items. */
  failed_items: string[];

  /** List of missing items. */
  missing_items: string[];
}

/**
 * Interface AgreementInterface
 */
export interface CheckoutAgreementsDataAgreementInterface {
  /** Agreement ID. */
  agreement_id: number;

  /** Agreement name. */
  name: string;

  /** Agreement content. */
  content: string;

  /** Agreement content height. Otherwise, null. */
  content_height?: string;

  /** Agreement checkbox text. */
  checkbox_text: string;

  /** Agreement status. */
  is_active: boolean;

  /** * true - HTML. * false - plain text. */
  is_html: boolean;

  /** The agreement applied mode. */
  mode: number;

  /** ExtensionInterface class for @see \Magento\CheckoutAgreements\Api\Data\AgreementInterface */
  extension_attributes?: CheckoutAgreementsDataAgreementExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\CheckoutAgreements\Api\Data\AgreementInterface
 */
export type CheckoutAgreementsDataAgreementExtensionInterface = object;

/**
 * Tax rate interface.
 */
export interface TaxDataTaxRateInterface {
  /** Id */
  id?: number;

  /** Country id */
  tax_country_id: string;

  /** Region id */
  tax_region_id?: number;

  /** Region name */
  region_name?: string;

  /** Postcode */
  tax_postcode?: string;

  /** Zip is range */
  zip_is_range?: number;

  /** Zip range from */
  zip_from?: number;

  /** Zip range to */
  zip_to?: number;

  /** Tax rate in percentage */
  rate: number;

  /** Tax rate code */
  code: string;

  /** Tax rate titles */
  titles?: TaxDataTaxRateTitleInterface[];

  /** ExtensionInterface class for @see \Magento\Tax\Api\Data\TaxRateInterface */
  extension_attributes?: TaxDataTaxRateExtensionInterface;
}

/**
 * Tax rate title interface.
 */
export interface TaxDataTaxRateTitleInterface {
  /** Store id */
  store_id: string;

  /** Title value */
  value: string;

  /** ExtensionInterface class for @see \Magento\Tax\Api\Data\TaxRateTitleInterface */
  extension_attributes?: TaxDataTaxRateTitleExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Tax\Api\Data\TaxRateTitleInterface
 */
export type TaxDataTaxRateTitleExtensionInterface = object;

/**
 * ExtensionInterface class for @see \Magento\Tax\Api\Data\TaxRateInterface
 */
export type TaxDataTaxRateExtensionInterface = object;

/**
 * Interface for tax rate search results.
 */
export interface TaxDataTaxRateSearchResultsInterface {
  /** Items */
  items: TaxDataTaxRateInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Tax rule interface.
 */
export interface TaxDataTaxRuleInterface {
  /** Id */
  id?: number;

  /** Tax rule code */
  code: string;

  /** Priority */
  priority: number;

  /** Sort order. */
  position: number;

  /** Customer tax class id */
  customer_tax_class_ids: number[];

  /** Product tax class id */
  product_tax_class_ids: number[];

  /** Tax rate ids */
  tax_rate_ids: number[];

  /** Calculate subtotal. */
  calculate_subtotal?: boolean;

  /** ExtensionInterface class for @see \Magento\Tax\Api\Data\TaxRuleInterface */
  extension_attributes?: TaxDataTaxRuleExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Tax\Api\Data\TaxRuleInterface
 */
export type TaxDataTaxRuleExtensionInterface = object;

/**
 * Interface for tax rule search results.
 */
export interface TaxDataTaxRuleSearchResultsInterface {
  /** Items */
  items: TaxDataTaxRuleInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Tax class interface.
 */
export interface TaxDataTaxClassInterface {
  /** Tax class ID. */
  class_id?: number;

  /** Tax class name. */
  class_name: string;

  /** Tax class type. */
  class_type: string;

  /** ExtensionInterface class for @see \Magento\Tax\Api\Data\TaxClassInterface */
  extension_attributes?: TaxDataTaxClassExtensionInterface;
}

/**
 * ExtensionInterface class for @see \Magento\Tax\Api\Data\TaxClassInterface
 */
export type TaxDataTaxClassExtensionInterface = object;

/**
 * Interface for tax class search results.
 */
export interface TaxDataTaxClassSearchResultsInterface {
  /** Items */
  items: TaxDataTaxClassInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Interface BulkStatusInterface Bulk summary data with list of operations items full data.
 */
export interface AsynchronousOperationsDataDetailedBulkOperationsStatusInterface {
  /** Operations list. */
  operations_list: AsynchronousOperationsDataOperationInterface[];

  /** ExtensionInterface class for @see \Magento\AsynchronousOperations\Api\Data\BulkSummaryInterface */
  extension_attributes?: AsynchronousOperationsDataBulkSummaryExtensionInterface;

  /** User type */
  user_type: number;

  /** Bulk uuid */
  bulk_id: string;

  /** Bulk description */
  description: string;

  /** Bulk scheduled time */
  start_time: string;

  /** User id */
  user_id: number;

  /** Total number of operations scheduled in scope of this bulk */
  operation_count: number;
}

/**
 * Class OperationInterface
 */
export interface AsynchronousOperationsDataOperationInterface {
  /** ExtensionInterface class for @see \Magento\AsynchronousOperations\Api\Data\OperationInterface */
  extension_attributes?: AsynchronousOperationsDataOperationExtensionInterface;

  /** Id */
  id: number;

  /** Bulk uuid */
  bulk_uuid: string;

  /** Queue Topic */
  topic_name: string;

  /** Data */
  serialized_data: string;

  /** Serialized Data */
  result_serialized_data: string;

  /** Operation status */
  status: number;

  /** Result message */
  result_message: string;

  /** Error code */
  error_code: number;
}

/**
 * ExtensionInterface class for @see \Magento\AsynchronousOperations\Api\Data\OperationInterface
 */
export interface AsynchronousOperationsDataOperationExtensionInterface {
  start_time?: string;
}

/**
 * ExtensionInterface class for @see \Magento\AsynchronousOperations\Api\Data\BulkSummaryInterface
 */
export type AsynchronousOperationsDataBulkSummaryExtensionInterface = object;

/**
 * Interface BulkStatusInterface Bulk summary data with list of operations items summary data.
 */
export interface AsynchronousOperationsDataBulkOperationsStatusInterface {
  /** List of operation with statuses (short data). */
  operations_list: AsynchronousOperationsDataSummaryOperationStatusInterface[];

  /** ExtensionInterface class for @see \Magento\AsynchronousOperations\Api\Data\BulkSummaryInterface */
  extension_attributes?: AsynchronousOperationsDataBulkSummaryExtensionInterface;

  /** User type */
  user_type: number;

  /** Bulk uuid */
  bulk_id: string;

  /** Bulk description */
  description: string;

  /** Bulk scheduled time */
  start_time: string;

  /** User id */
  user_id: number;

  /** Total number of operations scheduled in scope of this bulk */
  operation_count: number;
}

/**
 * Getter Class OperationsStatusInterface Instead of OperationInterface this class don't provide all operation data and not responsive to set any data, just to get operation data without serialized_data and result_serialized_data
 */
export interface AsynchronousOperationsDataSummaryOperationStatusInterface {
  /** Id */
  id: number;

  /** Operation status */
  status: number;

  /** Result message */
  result_message: string;

  /** Error code */
  error_code: number;
}

/**
 * Bulk operation search result interface. An bulk is a group of queue messages. An bulk operation item is a queue message.
 */
export interface AsynchronousOperationsDataOperationSearchResultsInterface {
  /** List of operations. */
  items: AsynchronousOperationsDataOperationInterface[];

  /** Search criteria interface. */
  search_criteria: FrameworkSearchCriteriaInterface;

  /** Total count. */
  total_count: number;
}

/**
 * Interface AuthDataInterface
 */
export interface PayPalBraintreeDataAuthDataInterface {
  /** Client token */
  client_token?: string;

  /** Display name */
  display_name: string;

  /** To success page */
  action_success: string;
  logged_in: boolean;

  /** Current store code */
  store_code: string;
}

/**
 * This is the interface for submission to the API.  For ease the API only takes interfaces the same as the SDK, but the SDK model cannot implement the interface.  Since the SDK model technically isn't API, we re-implement a simple DTO to handle the scenario.
 */
export interface VertexAddressValidationApiDataAddressInterface {
  /** The proper name of the city */
  city?: string;

  /** ISO 3166-1 Alpha-3 country code */
  country?: string;

  /** The proper name or the postal abbreviation of the state, province, or territory */
  main_division?: string;

  /** The Postal Code */
  postal_code?: string;

  /** The street address */
  street_address: string[];

  /** The name of the county */
  sub_division?: string;
}

/**
 * What we want to output to the API contains more data than what we want to bring in.  Chiefly, we want to ensure we're sending Magento data out (instead of Vertex data). That means sending Region IDs, and 2-character ISO country codes.
 */
export interface VertexAddressValidationApiDataCleansedAddressInterface {
  city?: string;
  country_code?: string;
  country_name?: string;
  postal_code?: string;
  region_id?: number;
  region_name?: string;
  street_address: string[];

  /** The regional sub division, such as a county or parish */
  sub_division?: string;
}

// export type QueryParamsType = Record<string | number, any>;
// export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

// export interface FullRequestParams extends Omit<RequestInit, "body"> {
//   /** set parameter to `true` for call `securityWorker` for this request */
//   secure?: boolean;
//   /** request path */
//   path: string;
//   /** content type of request body */
//   type?: ContentType;
//   /** query params */
//   query?: QueryParamsType;
//   /** format of response (i.e. response.json() -> format: "json") */
//   format?: ResponseFormat;
//   /** request body */
//   body?: unknown;
//   /** base url */
//   baseUrl?: string;
//   /** request cancellation token */
//   cancelToken?: CancelToken;
// }

// export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

// export interface ApiConfig<SecurityDataType = unknown> {
//   baseUrl?: string;
//   baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
//   securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
//   customFetch?: typeof fetch;
// }

// export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
//   data: D;
//   error: E;
// }

// type CancelToken = Symbol | string | number;

// export enum ContentType {
//   Json = "application/json",
//   FormData = "multipart/form-data",
//   UrlEncoded = "application/x-www-form-urlencoded",
// }

// export class HttpClient<SecurityDataType = unknown> {
//   public baseUrl: string = "http://localhost/rest/default";
//   private securityData: SecurityDataType | null = null;
//   private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
//   private abortControllers = new Map<CancelToken, AbortController>();
//   private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

//   private baseApiParams: RequestParams = {
//     credentials: "same-origin",
//     headers: {},
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//   };

//   constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
//     Object.assign(this, apiConfig);
//   }

//   public setSecurityData = (data: SecurityDataType | null) => {
//     this.securityData = data;
//   };

//   private encodeQueryParam(key: string, value: any) {
//     const encodedKey = encodeURIComponent(key);
//     return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
//   }

//   private addQueryParam(query: QueryParamsType, key: string) {
//     return this.encodeQueryParam(key, query[key]);
//   }

//   private addArrayQueryParam(query: QueryParamsType, key: string) {
//     const value = query[key];
//     return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
//   }

//   protected toQueryString(rawQuery?: QueryParamsType): string {
//     const query = rawQuery || {};
//     const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
//     return keys
//       .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
//       .join("&");
//   }

//   protected addQueryParams(rawQuery?: QueryParamsType): string {
//     const queryString = this.toQueryString(rawQuery);
//     return queryString ? `?${queryString}` : "";
//   }

//   private contentFormatters: Record<ContentType, (input: any) => any> = {
//     [ContentType.Json]: (input: any) =>
//       input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
//     [ContentType.FormData]: (input: any) =>
//       Object.keys(input || {}).reduce((formData, key) => {
//         const property = input[key];
//         formData.append(
//           key,
//           property instanceof Blob
//             ? property
//             : typeof property === "object" && property !== null
//             ? JSON.stringify(property)
//             : `${property}`,
//         );
//         return formData;
//       }, new FormData()),
//     [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
//   };

//   private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
//     return {
//       ...this.baseApiParams,
//       ...params1,
//       ...(params2 || {}),
//       headers: {
//         ...(this.baseApiParams.headers || {}),
//         ...(params1.headers || {}),
//         ...((params2 && params2.headers) || {}),
//       },
//     };
//   }

//   private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
//     if (this.abortControllers.has(cancelToken)) {
//       const abortController = this.abortControllers.get(cancelToken);
//       if (abortController) {
//         return abortController.signal;
//       }
//       return void 0;
//     }

//     const abortController = new AbortController();
//     this.abortControllers.set(cancelToken, abortController);
//     return abortController.signal;
//   };

//   public abortRequest = (cancelToken: CancelToken) => {
//     const abortController = this.abortControllers.get(cancelToken);

//     if (abortController) {
//       abortController.abort();
//       this.abortControllers.delete(cancelToken);
//     }
//   };

//   public request = async <T = any, E = any>({
//     body,
//     secure,
//     path,
//     type,
//     query,
//     format,
//     baseUrl,
//     cancelToken,
//     ...params
//   }: FullRequestParams): Promise<HttpResponse<T, E>> => {
//     const secureParams =
//       ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
//         this.securityWorker &&
//         (await this.securityWorker(this.securityData))) ||
//       {};
//     const requestParams = this.mergeRequestParams(params, secureParams);
//     const queryString = query && this.toQueryString(query);
//     const payloadFormatter = this.contentFormatters[type || ContentType.Json];
//     const responseFormat = format || requestParams.format;

//     return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
//       ...requestParams,
//       headers: {
//         ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
//         ...(requestParams.headers || {}),
//       },
//       signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
//       body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
//     }).then(async (response) => {
//       const r = response as HttpResponse<T, E>;
//       r.data = null as unknown as T;
//       r.error = null as unknown as E;

//       const data = !responseFormat
//         ? r
//         : await response[responseFormat]()
//             .then((data) => {
//               if (r.ok) {
//                 r.data = data;
//               } else {
//                 r.error = data;
//               }
//               return r;
//             })
//             .catch((e) => {
//               r.error = e;
//               return r;
//             });

//       if (cancelToken) {
//         this.abortControllers.delete(cancelToken);
//       }

//       if (!response.ok) throw data;
//       return data;
//     });
//   };
// }

// /**
//  * @title Magento Community
//  * @version 2.4
//  * @baseUrl http://localhost/rest/default
//  */
// export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
//   v1 = {
//     /**
//      * @description Retrieve list of all stores
//      *
//      * @tags storeStoreRepositoryV1
//      * @name StoreStoreRepositoryV1GetListGet
//      * @request GET:/V1/store/storeViews
//      */
//     storeStoreRepositoryV1GetListGet: (params: RequestParams = {}) =>
//       this.request<StoreDataStoreInterface[], ErrorResponse>({
//         path: `/V1/store/storeViews`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve list of all groups
//      *
//      * @tags storeGroupRepositoryV1
//      * @name StoreGroupRepositoryV1GetListGet
//      * @request GET:/V1/store/storeGroups
//      */
//     storeGroupRepositoryV1GetListGet: (params: RequestParams = {}) =>
//       this.request<StoreDataGroupInterface[], ErrorResponse>({
//         path: `/V1/store/storeGroups`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve list of all websites
//      *
//      * @tags storeWebsiteRepositoryV1
//      * @name StoreWebsiteRepositoryV1GetListGet
//      * @request GET:/V1/store/websites
//      */
//     storeWebsiteRepositoryV1GetListGet: (params: RequestParams = {}) =>
//       this.request<StoreDataWebsiteInterface[], ErrorResponse>({
//         path: `/V1/store/websites`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags storeStoreConfigManagerV1
//      * @name StoreStoreConfigManagerV1GetStoreConfigsGet
//      * @request GET:/V1/store/storeConfigs
//      */
//     storeStoreConfigManagerV1GetStoreConfigsGet: (query?: { storeCodes?: string[] }, params: RequestParams = {}) =>
//       this.request<StoreDataStoreConfigInterface[], ErrorResponse>({
//         path: `/V1/store/storeConfigs`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Search for images based on search criteria
//      *
//      * @tags adobeStockImageApiGetImageListV1
//      * @name AdobeStockImageApiGetImageListV1ExecuteGet
//      * @request GET:/V1/adobestock/search
//      */
//     adobeStockImageApiGetImageListV1ExecuteGet: (
//       query?: {
//         "searchCriteria[requestName]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<FrameworkSearchSearchResultInterface, ErrorResponse>({
//         path: `/V1/adobestock/search`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get currency information for the store.
//      *
//      * @tags directoryCurrencyInformationAcquirerV1
//      * @name DirectoryCurrencyInformationAcquirerV1GetCurrencyInfoGet
//      * @request GET:/V1/directory/currency
//      */
//     directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet: (params: RequestParams = {}) =>
//       this.request<DirectoryDataCurrencyInformationInterface, ErrorResponse>({
//         path: `/V1/directory/currency`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get all countries and regions information for the store.
//      *
//      * @tags directoryCountryInformationAcquirerV1
//      * @name DirectoryCountryInformationAcquirerV1GetCountriesInfoGet
//      * @request GET:/V1/directory/countries
//      */
//     directoryCountryInformationAcquirerV1GetCountriesInfoGet: (params: RequestParams = {}) =>
//       this.request<DirectoryDataCountryInformationInterface[], ErrorResponse>({
//         path: `/V1/directory/countries`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get country and region information for the store.
//      *
//      * @tags directoryCountryInformationAcquirerV1
//      * @name DirectoryCountryInformationAcquirerV1GetCountryInfoGet
//      * @request GET:/V1/directory/countries/{countryId}
//      */
//     directoryCountryInformationAcquirerV1GetCountryInfoGet: (countryId: string, params: RequestParams = {}) =>
//       this.request<DirectoryDataCountryInformationInterface, ErrorResponse>({
//         path: `/V1/directory/countries/${countryId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Returns an array of enabled modules
//      *
//      * @tags backendModuleServiceV1
//      * @name BackendModuleServiceV1GetModulesGet
//      * @request GET:/V1/modules
//      */
//     backendModuleServiceV1GetModulesGet: (params: RequestParams = {}) =>
//       this.request<string[], ErrorResponse>({
//         path: `/V1/modules`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve list of Attribute Sets This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#AttributeSetRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
//      *
//      * @tags eavAttributeSetRepositoryV1
//      * @name EavAttributeSetRepositoryV1GetListGet
//      * @request GET:/V1/eav/attribute-sets/list
//      */
//     eavAttributeSetRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<EavDataAttributeSetSearchResultsInterface, ErrorResponse>({
//         path: `/V1/eav/attribute-sets/list`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve attribute set information based on given ID
//      *
//      * @tags eavAttributeSetRepositoryV1
//      * @name EavAttributeSetRepositoryV1GetGet
//      * @request GET:/V1/eav/attribute-sets/{attributeSetId}
//      */
//     eavAttributeSetRepositoryV1GetGet: (attributeSetId: number, params: RequestParams = {}) =>
//       this.request<EavDataAttributeSetInterface, ErrorResponse>({
//         path: `/V1/eav/attribute-sets/${attributeSetId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Remove attribute set by given ID
//      *
//      * @tags eavAttributeSetRepositoryV1
//      * @name EavAttributeSetRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/eav/attribute-sets/{attributeSetId}
//      */
//     eavAttributeSetRepositoryV1DeleteByIdDelete: (attributeSetId: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/eav/attribute-sets/${attributeSetId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save attribute set data
//      *
//      * @tags eavAttributeSetRepositoryV1
//      * @name EavAttributeSetRepositoryV1SavePut
//      * @request PUT:/V1/eav/attribute-sets/{attributeSetId}
//      */
//     eavAttributeSetRepositoryV1SavePut: (
//       attributeSetId: string,
//       eavAttributeSetRepositoryV1SavePutBody: { attributeSet: EavDataAttributeSetInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<EavDataAttributeSetInterface, ErrorResponse>({
//         path: `/V1/eav/attribute-sets/${attributeSetId}`,
//         method: "PUT",
//         body: eavAttributeSetRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Create attribute set from data
//      *
//      * @tags eavAttributeSetManagementV1
//      * @name EavAttributeSetManagementV1CreatePost
//      * @request POST:/V1/eav/attribute-sets
//      */
//     eavAttributeSetManagementV1CreatePost: (
//       eavAttributeSetManagementV1CreatePostBody: {
//         entityTypeCode: string;
//         attributeSet: EavDataAttributeSetInterface;
//         skeletonId: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<EavDataAttributeSetInterface, ErrorResponse>({
//         path: `/V1/eav/attribute-sets`,
//         method: "POST",
//         body: eavAttributeSetManagementV1CreatePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Make Full Text Search and return found Documents
//      *
//      * @tags searchV1
//      * @name SearchV1SearchGet
//      * @request GET:/V1/search
//      */
//     searchV1SearchGet: (
//       query?: {
//         "searchCriteria[requestName]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<FrameworkSearchSearchResultInterface, ErrorResponse>({
//         path: `/V1/search`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get customer group by group ID.
//      *
//      * @tags customerGroupRepositoryV1
//      * @name CustomerGroupRepositoryV1GetByIdGet
//      * @request GET:/V1/customerGroups/{id}
//      */
//     customerGroupRepositoryV1GetByIdGet: (id: number, params: RequestParams = {}) =>
//       this.request<CustomerDataGroupInterface, ErrorResponse>({
//         path: `/V1/customerGroups/${id}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save customer group.
//      *
//      * @tags customerGroupRepositoryV1
//      * @name CustomerGroupRepositoryV1SavePut
//      * @request PUT:/V1/customerGroups/{id}
//      */
//     customerGroupRepositoryV1SavePut: (
//       id: string,
//       customerGroupRepositoryV1SavePutBody: { group: CustomerDataGroupInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<CustomerDataGroupInterface, ErrorResponse>({
//         path: `/V1/customerGroups/${id}`,
//         method: "PUT",
//         body: customerGroupRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete customer group by ID.
//      *
//      * @tags customerGroupRepositoryV1
//      * @name CustomerGroupRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/customerGroups/{id}
//      */
//     customerGroupRepositoryV1DeleteByIdDelete: (id: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/customerGroups/${id}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve customer groups. The list of groups can be filtered to exclude the NOT_LOGGED_IN group using the first parameter and/or it can be filtered by tax class. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#GroupRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
//      *
//      * @tags customerGroupRepositoryV1
//      * @name CustomerGroupRepositoryV1GetListGet
//      * @request GET:/V1/customerGroups/search
//      */
//     customerGroupRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<CustomerDataGroupSearchResultsInterface, ErrorResponse>({
//         path: `/V1/customerGroups/search`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save customer group.
//      *
//      * @tags customerGroupRepositoryV1
//      * @name CustomerGroupRepositoryV1SavePost
//      * @request POST:/V1/customerGroups
//      */
//     customerGroupRepositoryV1SavePost: (
//       customerGroupRepositoryV1SavePostBody: { group: CustomerDataGroupInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<CustomerDataGroupInterface, ErrorResponse>({
//         path: `/V1/customerGroups`,
//         method: "POST",
//         body: customerGroupRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get default customer group.
//      *
//      * @tags customerGroupManagementV1
//      * @name CustomerGroupManagementV1GetDefaultGroupGet
//      * @request GET:/V1/customerGroups/default/{storeId}
//      */
//     customerGroupManagementV1GetDefaultGroupGet: (storeId: number, params: RequestParams = {}) =>
//       this.request<CustomerDataGroupInterface, ErrorResponse>({
//         path: `/V1/customerGroups/default/${storeId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get default customer group.
//      *
//      * @tags customerGroupManagementV1
//      * @name CustomerGroupManagementV1GetDefaultGroupGet2
//      * @request GET:/V1/customerGroups/default
//      * @originalName customerGroupManagementV1GetDefaultGroupGet
//      * @duplicate
//      */
//     customerGroupManagementV1GetDefaultGroupGet2: (query?: { storeId?: number }, params: RequestParams = {}) =>
//       this.request<CustomerDataGroupInterface, ErrorResponse>({
//         path: `/V1/customerGroups/default`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Check if customer group can be deleted.
//      *
//      * @tags customerGroupManagementV1
//      * @name CustomerGroupManagementV1IsReadonlyGet
//      * @request GET:/V1/customerGroups/{id}/permissions
//      */
//     customerGroupManagementV1IsReadonlyGet: (id: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/customerGroups/${id}/permissions`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Set system default customer group.
//      *
//      * @tags customerCustomerGroupConfigV1
//      * @name CustomerCustomerGroupConfigV1SetDefaultCustomerGroupPut
//      * @request PUT:/V1/customerGroups/default/{id}
//      */
//     customerCustomerGroupConfigV1SetDefaultCustomerGroupPut: (id: number, params: RequestParams = {}) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/customerGroups/default/${id}`,
//         method: "PUT",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve attribute metadata.
//      *
//      * @tags customerCustomerMetadataV1
//      * @name CustomerCustomerMetadataV1GetAttributeMetadataGet
//      * @request GET:/V1/attributeMetadata/customer/attribute/{attributeCode}
//      */
//     customerCustomerMetadataV1GetAttributeMetadataGet: (attributeCode: string, params: RequestParams = {}) =>
//       this.request<CustomerDataAttributeMetadataInterface, ErrorResponse>({
//         path: `/V1/attributeMetadata/customer/attribute/${attributeCode}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve all attributes filtered by form code
//      *
//      * @tags customerCustomerMetadataV1
//      * @name CustomerCustomerMetadataV1GetAttributesGet
//      * @request GET:/V1/attributeMetadata/customer/form/{formCode}
//      */
//     customerCustomerMetadataV1GetAttributesGet: (formCode: string, params: RequestParams = {}) =>
//       this.request<CustomerDataAttributeMetadataInterface[], ErrorResponse>({
//         path: `/V1/attributeMetadata/customer/form/${formCode}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get all attribute metadata.
//      *
//      * @tags customerCustomerMetadataV1
//      * @name CustomerCustomerMetadataV1GetAllAttributesMetadataGet
//      * @request GET:/V1/attributeMetadata/customer
//      */
//     customerCustomerMetadataV1GetAllAttributesMetadataGet: (params: RequestParams = {}) =>
//       this.request<CustomerDataAttributeMetadataInterface[], ErrorResponse>({
//         path: `/V1/attributeMetadata/customer`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get custom attributes metadata for the given data interface.
//      *
//      * @tags customerCustomerMetadataV1
//      * @name CustomerCustomerMetadataV1GetCustomAttributesMetadataGet
//      * @request GET:/V1/attributeMetadata/customer/custom
//      */
//     customerCustomerMetadataV1GetCustomAttributesMetadataGet: (
//       query?: { dataInterfaceName?: string },
//       params: RequestParams = {},
//     ) =>
//       this.request<CustomerDataAttributeMetadataInterface[], ErrorResponse>({
//         path: `/V1/attributeMetadata/customer/custom`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve attribute metadata.
//      *
//      * @tags customerAddressMetadataV1
//      * @name CustomerAddressMetadataV1GetAttributeMetadataGet
//      * @request GET:/V1/attributeMetadata/customerAddress/attribute/{attributeCode}
//      */
//     customerAddressMetadataV1GetAttributeMetadataGet: (attributeCode: string, params: RequestParams = {}) =>
//       this.request<CustomerDataAttributeMetadataInterface, ErrorResponse>({
//         path: `/V1/attributeMetadata/customerAddress/attribute/${attributeCode}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve all attributes filtered by form code
//      *
//      * @tags customerAddressMetadataV1
//      * @name CustomerAddressMetadataV1GetAttributesGet
//      * @request GET:/V1/attributeMetadata/customerAddress/form/{formCode}
//      */
//     customerAddressMetadataV1GetAttributesGet: (formCode: string, params: RequestParams = {}) =>
//       this.request<CustomerDataAttributeMetadataInterface[], ErrorResponse>({
//         path: `/V1/attributeMetadata/customerAddress/form/${formCode}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get all attribute metadata.
//      *
//      * @tags customerAddressMetadataV1
//      * @name CustomerAddressMetadataV1GetAllAttributesMetadataGet
//      * @request GET:/V1/attributeMetadata/customerAddress
//      */
//     customerAddressMetadataV1GetAllAttributesMetadataGet: (params: RequestParams = {}) =>
//       this.request<CustomerDataAttributeMetadataInterface[], ErrorResponse>({
//         path: `/V1/attributeMetadata/customerAddress`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get custom attributes metadata for the given data interface.
//      *
//      * @tags customerAddressMetadataV1
//      * @name CustomerAddressMetadataV1GetCustomAttributesMetadataGet
//      * @request GET:/V1/attributeMetadata/customerAddress/custom
//      */
//     customerAddressMetadataV1GetCustomAttributesMetadataGet: (
//       query?: { dataInterfaceName?: string },
//       params: RequestParams = {},
//     ) =>
//       this.request<CustomerDataAttributeMetadataInterface[], ErrorResponse>({
//         path: `/V1/attributeMetadata/customerAddress/custom`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get customer by Customer ID.
//      *
//      * @tags customerCustomerRepositoryV1
//      * @name CustomerCustomerRepositoryV1GetByIdGet
//      * @request GET:/V1/customers/{customerId}
//      */
//     customerCustomerRepositoryV1GetByIdGet: (customerId: number, params: RequestParams = {}) =>
//       this.request<CustomerDataCustomerInterface, ErrorResponse>({
//         path: `/V1/customers/${customerId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Create or update a customer.
//      *
//      * @tags customerCustomerRepositoryV1
//      * @name CustomerCustomerRepositoryV1SavePut
//      * @request PUT:/V1/customers/{customerId}
//      */
//     customerCustomerRepositoryV1SavePut: (
//       customerId: string,
//       customerCustomerRepositoryV1SavePutBody: { customer: CustomerDataCustomerInterface; passwordHash?: string },
//       params: RequestParams = {},
//     ) =>
//       this.request<CustomerDataCustomerInterface, ErrorResponse>({
//         path: `/V1/customers/${customerId}`,
//         method: "PUT",
//         body: customerCustomerRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete customer by Customer ID.
//      *
//      * @tags customerCustomerRepositoryV1
//      * @name CustomerCustomerRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/customers/{customerId}
//      */
//     customerCustomerRepositoryV1DeleteByIdDelete: (customerId: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/customers/${customerId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Create or update a customer.
//      *
//      * @tags customerCustomerRepositoryV1
//      * @name CustomerCustomerRepositoryV1SavePut2
//      * @request PUT:/V1/customers/me
//      * @originalName customerCustomerRepositoryV1SavePut
//      * @duplicate
//      */
//     customerCustomerRepositoryV1SavePut2: (
//       customerCustomerRepositoryV1SavePutBody: { customer: CustomerDataCustomerInterface; passwordHash?: string },
//       params: RequestParams = {},
//     ) =>
//       this.request<CustomerDataCustomerInterface, ErrorResponse>({
//         path: `/V1/customers/me`,
//         method: "PUT",
//         body: customerCustomerRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get customer by Customer ID.
//      *
//      * @tags customerCustomerRepositoryV1
//      * @name CustomerCustomerRepositoryV1GetByIdGet2
//      * @request GET:/V1/customers/me
//      * @originalName customerCustomerRepositoryV1GetByIdGet
//      * @duplicate
//      */
//     customerCustomerRepositoryV1GetByIdGet2: (params: RequestParams = {}) =>
//       this.request<CustomerDataCustomerInterface, ErrorResponse>({
//         path: `/V1/customers/me`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve customers which match a specified criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#CustomerRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
//      *
//      * @tags customerCustomerRepositoryV1
//      * @name CustomerCustomerRepositoryV1GetListGet
//      * @request GET:/V1/customers/search
//      */
//     customerCustomerRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<CustomerDataCustomerSearchResultsInterface, ErrorResponse>({
//         path: `/V1/customers/search`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Create customer account. Perform necessary business operations like sending email.
//      *
//      * @tags customerAccountManagementV1
//      * @name CustomerAccountManagementV1CreateAccountPost
//      * @request POST:/V1/customers
//      */
//     customerAccountManagementV1CreateAccountPost: (
//       customerAccountManagementV1CreateAccountPostBody: {
//         customer: CustomerDataCustomerInterface;
//         password?: string;
//         redirectUrl?: string;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<CustomerDataCustomerInterface, ErrorResponse>({
//         path: `/V1/customers`,
//         method: "POST",
//         body: customerAccountManagementV1CreateAccountPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Activate a customer account using a key that was sent in a confirmation email.
//      *
//      * @tags customerAccountManagementV1
//      * @name CustomerAccountManagementV1ActivateByIdPut
//      * @request PUT:/V1/customers/me/activate
//      */
//     customerAccountManagementV1ActivateByIdPut: (
//       customerAccountManagementV1ActivateByIdPutBody: { confirmationKey: string },
//       params: RequestParams = {},
//     ) =>
//       this.request<CustomerDataCustomerInterface, ErrorResponse>({
//         path: `/V1/customers/me/activate`,
//         method: "PUT",
//         body: customerAccountManagementV1ActivateByIdPutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Activate a customer account using a key that was sent in a confirmation email.
//      *
//      * @tags customerAccountManagementV1
//      * @name CustomerAccountManagementV1ActivatePut
//      * @request PUT:/V1/customers/{email}/activate
//      */
//     customerAccountManagementV1ActivatePut: (
//       email: string,
//       customerAccountManagementV1ActivatePutBody: { confirmationKey: string },
//       params: RequestParams = {},
//     ) =>
//       this.request<CustomerDataCustomerInterface, ErrorResponse>({
//         path: `/V1/customers/${email}/activate`,
//         method: "PUT",
//         body: customerAccountManagementV1ActivatePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Change customer password.
//      *
//      * @tags customerAccountManagementV1
//      * @name CustomerAccountManagementV1ChangePasswordByIdPut
//      * @request PUT:/V1/customers/me/password
//      */
//     customerAccountManagementV1ChangePasswordByIdPut: (
//       customerAccountManagementV1ChangePasswordByIdPutBody: { currentPassword: string; newPassword: string },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/customers/me/password`,
//         method: "PUT",
//         body: customerAccountManagementV1ChangePasswordByIdPutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Check if password reset token is valid.
//      *
//      * @tags customerAccountManagementV1
//      * @name CustomerAccountManagementV1ValidateResetPasswordLinkTokenGet
//      * @request GET:/V1/customers/{customerId}/password/resetLinkToken/{resetPasswordLinkToken}
//      */
//     customerAccountManagementV1ValidateResetPasswordLinkTokenGet: (
//       customerId: number,
//       resetPasswordLinkToken: string,
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/customers/${customerId}/password/resetLinkToken/${resetPasswordLinkToken}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Send an email to the customer with a password reset link.
//      *
//      * @tags customerAccountManagementV1
//      * @name CustomerAccountManagementV1InitiatePasswordResetPut
//      * @request PUT:/V1/customers/password
//      */
//     customerAccountManagementV1InitiatePasswordResetPut: (
//       customerAccountManagementV1InitiatePasswordResetPutBody: { email: string; template: string; websiteId?: number },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/customers/password`,
//         method: "PUT",
//         body: customerAccountManagementV1InitiatePasswordResetPutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Reset customer password.
//      *
//      * @tags customerAccountManagementV1
//      * @name CustomerAccountManagementV1ResetPasswordPost
//      * @request POST:/V1/customers/resetPassword
//      */
//     customerAccountManagementV1ResetPasswordPost: (
//       customerAccountManagementV1ResetPasswordPostBody: { email: string; resetToken: string; newPassword: string },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/customers/resetPassword`,
//         method: "POST",
//         body: customerAccountManagementV1ResetPasswordPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Gets the account confirmation status.
//      *
//      * @tags customerAccountManagementV1
//      * @name CustomerAccountManagementV1GetConfirmationStatusGet
//      * @request GET:/V1/customers/{customerId}/confirm
//      */
//     customerAccountManagementV1GetConfirmationStatusGet: (customerId: number, params: RequestParams = {}) =>
//       this.request<string, ErrorResponse>({
//         path: `/V1/customers/${customerId}/confirm`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Resend confirmation email.
//      *
//      * @tags customerAccountManagementV1
//      * @name CustomerAccountManagementV1ResendConfirmationPost
//      * @request POST:/V1/customers/confirm
//      */
//     customerAccountManagementV1ResendConfirmationPost: (
//       customerAccountManagementV1ResendConfirmationPostBody: { email: string; websiteId: number; redirectUrl?: string },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/customers/confirm`,
//         method: "POST",
//         body: customerAccountManagementV1ResendConfirmationPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Validate customer data.
//      *
//      * @tags customerAccountManagementV1
//      * @name CustomerAccountManagementV1ValidatePut
//      * @request PUT:/V1/customers/validate
//      */
//     customerAccountManagementV1ValidatePut: (
//       customerAccountManagementV1ValidatePutBody: { customer: CustomerDataCustomerInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<CustomerDataValidationResultsInterface, ErrorResponse>({
//         path: `/V1/customers/validate`,
//         method: "PUT",
//         body: customerAccountManagementV1ValidatePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Check if customer can be deleted.
//      *
//      * @tags customerAccountManagementV1
//      * @name CustomerAccountManagementV1IsReadonlyGet
//      * @request GET:/V1/customers/{customerId}/permissions/readonly
//      */
//     customerAccountManagementV1IsReadonlyGet: (customerId: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/customers/${customerId}/permissions/readonly`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Check if given email is associated with a customer account in given website.
//      *
//      * @tags customerAccountManagementV1
//      * @name CustomerAccountManagementV1IsEmailAvailablePost
//      * @request POST:/V1/customers/isEmailAvailable
//      */
//     customerAccountManagementV1IsEmailAvailablePost: (
//       customerAccountManagementV1IsEmailAvailablePostBody: { customerEmail: string; websiteId?: number },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/customers/isEmailAvailable`,
//         method: "POST",
//         body: customerAccountManagementV1IsEmailAvailablePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve default billing address for the given customerId.
//      *
//      * @tags customerAccountManagementV1
//      * @name CustomerAccountManagementV1GetDefaultBillingAddressGet
//      * @request GET:/V1/customers/me/billingAddress
//      */
//     customerAccountManagementV1GetDefaultBillingAddressGet: (params: RequestParams = {}) =>
//       this.request<CustomerDataAddressInterface, ErrorResponse>({
//         path: `/V1/customers/me/billingAddress`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve default billing address for the given customerId.
//      *
//      * @tags customerAccountManagementV1
//      * @name CustomerAccountManagementV1GetDefaultBillingAddressGet2
//      * @request GET:/V1/customers/{customerId}/billingAddress
//      * @originalName customerAccountManagementV1GetDefaultBillingAddressGet
//      * @duplicate
//      */
//     customerAccountManagementV1GetDefaultBillingAddressGet2: (customerId: number, params: RequestParams = {}) =>
//       this.request<CustomerDataAddressInterface, ErrorResponse>({
//         path: `/V1/customers/${customerId}/billingAddress`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve default shipping address for the given customerId.
//      *
//      * @tags customerAccountManagementV1
//      * @name CustomerAccountManagementV1GetDefaultShippingAddressGet
//      * @request GET:/V1/customers/me/shippingAddress
//      */
//     customerAccountManagementV1GetDefaultShippingAddressGet: (params: RequestParams = {}) =>
//       this.request<CustomerDataAddressInterface, ErrorResponse>({
//         path: `/V1/customers/me/shippingAddress`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve default shipping address for the given customerId.
//      *
//      * @tags customerAccountManagementV1
//      * @name CustomerAccountManagementV1GetDefaultShippingAddressGet2
//      * @request GET:/V1/customers/{customerId}/shippingAddress
//      * @originalName customerAccountManagementV1GetDefaultShippingAddressGet
//      * @duplicate
//      */
//     customerAccountManagementV1GetDefaultShippingAddressGet2: (customerId: number, params: RequestParams = {}) =>
//       this.request<CustomerDataAddressInterface, ErrorResponse>({
//         path: `/V1/customers/${customerId}/shippingAddress`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve customer address.
//      *
//      * @tags customerAddressRepositoryV1
//      * @name CustomerAddressRepositoryV1GetByIdGet
//      * @request GET:/V1/customers/addresses/{addressId}
//      */
//     customerAddressRepositoryV1GetByIdGet: (addressId: number, params: RequestParams = {}) =>
//       this.request<CustomerDataAddressInterface, ErrorResponse>({
//         path: `/V1/customers/addresses/${addressId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete customer address by ID.
//      *
//      * @tags customerAddressRepositoryV1
//      * @name CustomerAddressRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/addresses/{addressId}
//      */
//     customerAddressRepositoryV1DeleteByIdDelete: (addressId: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/addresses/${addressId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve page.
//      *
//      * @tags cmsPageRepositoryV1
//      * @name CmsPageRepositoryV1GetByIdGet
//      * @request GET:/V1/cmsPage/{pageId}
//      */
//     cmsPageRepositoryV1GetByIdGet: (pageId: number, params: RequestParams = {}) =>
//       this.request<CmsDataPageInterface, ErrorResponse>({
//         path: `/V1/cmsPage/${pageId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete page by ID.
//      *
//      * @tags cmsPageRepositoryV1
//      * @name CmsPageRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/cmsPage/{pageId}
//      */
//     cmsPageRepositoryV1DeleteByIdDelete: (pageId: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/cmsPage/${pageId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve pages matching the specified criteria.
//      *
//      * @tags cmsPageRepositoryV1
//      * @name CmsPageRepositoryV1GetListGet
//      * @request GET:/V1/cmsPage/search
//      */
//     cmsPageRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<CmsDataPageSearchResultsInterface, ErrorResponse>({
//         path: `/V1/cmsPage/search`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save page.
//      *
//      * @tags cmsPageRepositoryV1
//      * @name CmsPageRepositoryV1SavePost
//      * @request POST:/V1/cmsPage
//      */
//     cmsPageRepositoryV1SavePost: (
//       cmsPageRepositoryV1SavePostBody: { page: CmsDataPageInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<CmsDataPageInterface, ErrorResponse>({
//         path: `/V1/cmsPage`,
//         method: "POST",
//         body: cmsPageRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save page.
//      *
//      * @tags cmsPageRepositoryV1
//      * @name CmsPageRepositoryV1SavePut
//      * @request PUT:/V1/cmsPage/{id}
//      */
//     cmsPageRepositoryV1SavePut: (
//       id: string,
//       cmsPageRepositoryV1SavePutBody: { page: CmsDataPageInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<CmsDataPageInterface, ErrorResponse>({
//         path: `/V1/cmsPage/${id}`,
//         method: "PUT",
//         body: cmsPageRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve block.
//      *
//      * @tags cmsBlockRepositoryV1
//      * @name CmsBlockRepositoryV1GetByIdGet
//      * @request GET:/V1/cmsBlock/{blockId}
//      */
//     cmsBlockRepositoryV1GetByIdGet: (blockId: string, params: RequestParams = {}) =>
//       this.request<CmsDataBlockInterface, ErrorResponse>({
//         path: `/V1/cmsBlock/${blockId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete block by ID.
//      *
//      * @tags cmsBlockRepositoryV1
//      * @name CmsBlockRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/cmsBlock/{blockId}
//      */
//     cmsBlockRepositoryV1DeleteByIdDelete: (blockId: string, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/cmsBlock/${blockId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve blocks matching the specified criteria.
//      *
//      * @tags cmsBlockRepositoryV1
//      * @name CmsBlockRepositoryV1GetListGet
//      * @request GET:/V1/cmsBlock/search
//      */
//     cmsBlockRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<CmsDataBlockSearchResultsInterface, ErrorResponse>({
//         path: `/V1/cmsBlock/search`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save block.
//      *
//      * @tags cmsBlockRepositoryV1
//      * @name CmsBlockRepositoryV1SavePost
//      * @request POST:/V1/cmsBlock
//      */
//     cmsBlockRepositoryV1SavePost: (
//       cmsBlockRepositoryV1SavePostBody: { block: CmsDataBlockInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<CmsDataBlockInterface, ErrorResponse>({
//         path: `/V1/cmsBlock`,
//         method: "POST",
//         body: cmsBlockRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save block.
//      *
//      * @tags cmsBlockRepositoryV1
//      * @name CmsBlockRepositoryV1SavePut
//      * @request PUT:/V1/cmsBlock/{id}
//      */
//     cmsBlockRepositoryV1SavePut: (
//       id: string,
//       cmsBlockRepositoryV1SavePutBody: { block: CmsDataBlockInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<CmsDataBlockInterface, ErrorResponse>({
//         path: `/V1/cmsBlock/${id}`,
//         method: "PUT",
//         body: cmsBlockRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Create product
//      *
//      * @tags catalogProductRepositoryV1
//      * @name CatalogProductRepositoryV1SavePost
//      * @request POST:/V1/products
//      */
//     catalogProductRepositoryV1SavePost: (
//       catalogProductRepositoryV1SavePostBody: { product: CatalogDataProductInterface; saveOptions?: boolean },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataProductInterface, ErrorResponse>({
//         path: `/V1/products`,
//         method: "POST",
//         body: catalogProductRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get product list
//      *
//      * @tags catalogProductRepositoryV1
//      * @name CatalogProductRepositoryV1GetListGet
//      * @request GET:/V1/products
//      */
//     catalogProductRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataProductSearchResultsInterface, ErrorResponse>({
//         path: `/V1/products`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Create product
//      *
//      * @tags catalogProductRepositoryV1
//      * @name CatalogProductRepositoryV1SavePut
//      * @request PUT:/V1/products/{sku}
//      */
//     catalogProductRepositoryV1SavePut: (
//       sku: string,
//       catalogProductRepositoryV1SavePutBody: { product: CatalogDataProductInterface; saveOptions?: boolean },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataProductInterface, ErrorResponse>({
//         path: `/V1/products/${sku}`,
//         method: "PUT",
//         body: catalogProductRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags catalogProductRepositoryV1
//      * @name CatalogProductRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/products/{sku}
//      */
//     catalogProductRepositoryV1DeleteByIdDelete: (sku: string, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/products/${sku}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get info about product by product SKU
//      *
//      * @tags catalogProductRepositoryV1
//      * @name CatalogProductRepositoryV1GetGet
//      * @request GET:/V1/products/{sku}
//      */
//     catalogProductRepositoryV1GetGet: (
//       sku: string,
//       query?: { editMode?: boolean; storeId?: number; forceReload?: boolean },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataProductInterface, ErrorResponse>({
//         path: `/V1/products/${sku}`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve list of product attribute types
//      *
//      * @tags catalogProductAttributeTypesListV1
//      * @name CatalogProductAttributeTypesListV1GetItemsGet
//      * @request GET:/V1/products/attributes/types
//      */
//     catalogProductAttributeTypesListV1GetItemsGet: (params: RequestParams = {}) =>
//       this.request<CatalogDataProductAttributeTypeInterface[], ErrorResponse>({
//         path: `/V1/products/attributes/types`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve specific attribute
//      *
//      * @tags catalogProductAttributeRepositoryV1
//      * @name CatalogProductAttributeRepositoryV1GetGet
//      * @request GET:/V1/products/attributes/{attributeCode}
//      */
//     catalogProductAttributeRepositoryV1GetGet: (attributeCode: string, params: RequestParams = {}) =>
//       this.request<CatalogDataProductAttributeInterface, ErrorResponse>({
//         path: `/V1/products/attributes/${attributeCode}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save attribute data
//      *
//      * @tags catalogProductAttributeRepositoryV1
//      * @name CatalogProductAttributeRepositoryV1SavePut
//      * @request PUT:/V1/products/attributes/{attributeCode}
//      */
//     catalogProductAttributeRepositoryV1SavePut: (
//       attributeCode: string,
//       catalogProductAttributeRepositoryV1SavePutBody: { attribute: CatalogDataProductAttributeInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataProductAttributeInterface, ErrorResponse>({
//         path: `/V1/products/attributes/${attributeCode}`,
//         method: "PUT",
//         body: catalogProductAttributeRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete Attribute by id
//      *
//      * @tags catalogProductAttributeRepositoryV1
//      * @name CatalogProductAttributeRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/products/attributes/{attributeCode}
//      */
//     catalogProductAttributeRepositoryV1DeleteByIdDelete: (attributeCode: string, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/products/attributes/${attributeCode}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve all attributes for entity type
//      *
//      * @tags catalogProductAttributeRepositoryV1
//      * @name CatalogProductAttributeRepositoryV1GetListGet
//      * @request GET:/V1/products/attributes
//      */
//     catalogProductAttributeRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataProductAttributeSearchResultsInterface, ErrorResponse>({
//         path: `/V1/products/attributes`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save attribute data
//      *
//      * @tags catalogProductAttributeRepositoryV1
//      * @name CatalogProductAttributeRepositoryV1SavePost
//      * @request POST:/V1/products/attributes
//      */
//     catalogProductAttributeRepositoryV1SavePost: (
//       catalogProductAttributeRepositoryV1SavePostBody: { attribute: CatalogDataProductAttributeInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataProductAttributeInterface, ErrorResponse>({
//         path: `/V1/products/attributes`,
//         method: "POST",
//         body: catalogProductAttributeRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve specific attribute
//      *
//      * @tags catalogCategoryAttributeRepositoryV1
//      * @name CatalogCategoryAttributeRepositoryV1GetGet
//      * @request GET:/V1/categories/attributes/{attributeCode}
//      */
//     catalogCategoryAttributeRepositoryV1GetGet: (attributeCode: string, params: RequestParams = {}) =>
//       this.request<CatalogDataCategoryAttributeInterface, ErrorResponse>({
//         path: `/V1/categories/attributes/${attributeCode}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve all attributes for entity type
//      *
//      * @tags catalogCategoryAttributeRepositoryV1
//      * @name CatalogCategoryAttributeRepositoryV1GetListGet
//      * @request GET:/V1/categories/attributes
//      */
//     catalogCategoryAttributeRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataCategoryAttributeSearchResultsInterface, ErrorResponse>({
//         path: `/V1/categories/attributes`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve list of attribute options
//      *
//      * @tags catalogCategoryAttributeOptionManagementV1
//      * @name CatalogCategoryAttributeOptionManagementV1GetItemsGet
//      * @request GET:/V1/categories/attributes/{attributeCode}/options
//      */
//     catalogCategoryAttributeOptionManagementV1GetItemsGet: (attributeCode: string, params: RequestParams = {}) =>
//       this.request<EavDataAttributeOptionInterface[], ErrorResponse>({
//         path: `/V1/categories/attributes/${attributeCode}/options`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve available product types
//      *
//      * @tags catalogProductTypeListV1
//      * @name CatalogProductTypeListV1GetProductTypesGet
//      * @request GET:/V1/products/types
//      */
//     catalogProductTypeListV1GetProductTypesGet: (params: RequestParams = {}) =>
//       this.request<CatalogDataProductTypeInterface[], ErrorResponse>({
//         path: `/V1/products/types`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve list of Attribute Sets
//      *
//      * @tags catalogAttributeSetRepositoryV1
//      * @name CatalogAttributeSetRepositoryV1GetListGet
//      * @request GET:/V1/products/attribute-sets/sets/list
//      */
//     catalogAttributeSetRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<EavDataAttributeSetSearchResultsInterface, ErrorResponse>({
//         path: `/V1/products/attribute-sets/sets/list`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve attribute set information based on given ID
//      *
//      * @tags catalogAttributeSetRepositoryV1
//      * @name CatalogAttributeSetRepositoryV1GetGet
//      * @request GET:/V1/products/attribute-sets/{attributeSetId}
//      */
//     catalogAttributeSetRepositoryV1GetGet: (attributeSetId: number, params: RequestParams = {}) =>
//       this.request<EavDataAttributeSetInterface, ErrorResponse>({
//         path: `/V1/products/attribute-sets/${attributeSetId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Remove attribute set by given ID
//      *
//      * @tags catalogAttributeSetRepositoryV1
//      * @name CatalogAttributeSetRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/products/attribute-sets/{attributeSetId}
//      */
//     catalogAttributeSetRepositoryV1DeleteByIdDelete: (attributeSetId: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/products/attribute-sets/${attributeSetId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save attribute set data
//      *
//      * @tags catalogAttributeSetRepositoryV1
//      * @name CatalogAttributeSetRepositoryV1SavePut
//      * @request PUT:/V1/products/attribute-sets/{attributeSetId}
//      */
//     catalogAttributeSetRepositoryV1SavePut: (
//       attributeSetId: string,
//       catalogAttributeSetRepositoryV1SavePutBody: { attributeSet: EavDataAttributeSetInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<EavDataAttributeSetInterface, ErrorResponse>({
//         path: `/V1/products/attribute-sets/${attributeSetId}`,
//         method: "PUT",
//         body: catalogAttributeSetRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Create attribute set from data
//      *
//      * @tags catalogAttributeSetManagementV1
//      * @name CatalogAttributeSetManagementV1CreatePost
//      * @request POST:/V1/products/attribute-sets
//      */
//     catalogAttributeSetManagementV1CreatePost: (
//       catalogAttributeSetManagementV1CreatePostBody: { attributeSet: EavDataAttributeSetInterface; skeletonId: number },
//       params: RequestParams = {},
//     ) =>
//       this.request<EavDataAttributeSetInterface, ErrorResponse>({
//         path: `/V1/products/attribute-sets`,
//         method: "POST",
//         body: catalogAttributeSetManagementV1CreatePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve related attributes based on given attribute set ID
//      *
//      * @tags catalogProductAttributeManagementV1
//      * @name CatalogProductAttributeManagementV1GetAttributesGet
//      * @request GET:/V1/products/attribute-sets/{attributeSetId}/attributes
//      */
//     catalogProductAttributeManagementV1GetAttributesGet: (attributeSetId: string, params: RequestParams = {}) =>
//       this.request<CatalogDataProductAttributeInterface[], ErrorResponse>({
//         path: `/V1/products/attribute-sets/${attributeSetId}/attributes`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Assign attribute to attribute set
//      *
//      * @tags catalogProductAttributeManagementV1
//      * @name CatalogProductAttributeManagementV1AssignPost
//      * @request POST:/V1/products/attribute-sets/attributes
//      */
//     catalogProductAttributeManagementV1AssignPost: (
//       catalogProductAttributeManagementV1AssignPostBody: {
//         attributeSetId: number;
//         attributeGroupId: number;
//         attributeCode: string;
//         sortOrder: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/products/attribute-sets/attributes`,
//         method: "POST",
//         body: catalogProductAttributeManagementV1AssignPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Remove attribute from attribute set
//      *
//      * @tags catalogProductAttributeManagementV1
//      * @name CatalogProductAttributeManagementV1UnassignDelete
//      * @request DELETE:/V1/products/attribute-sets/{attributeSetId}/attributes/{attributeCode}
//      */
//     catalogProductAttributeManagementV1UnassignDelete: (
//       attributeSetId: string,
//       attributeCode: string,
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/products/attribute-sets/${attributeSetId}/attributes/${attributeCode}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve list of attribute groups
//      *
//      * @tags catalogProductAttributeGroupRepositoryV1
//      * @name CatalogProductAttributeGroupRepositoryV1GetListGet
//      * @request GET:/V1/products/attribute-sets/groups/list
//      */
//     catalogProductAttributeGroupRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<EavDataAttributeGroupSearchResultsInterface, ErrorResponse>({
//         path: `/V1/products/attribute-sets/groups/list`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save attribute group
//      *
//      * @tags catalogProductAttributeGroupRepositoryV1
//      * @name CatalogProductAttributeGroupRepositoryV1SavePost
//      * @request POST:/V1/products/attribute-sets/groups
//      */
//     catalogProductAttributeGroupRepositoryV1SavePost: (
//       catalogProductAttributeGroupRepositoryV1SavePostBody: { group: EavDataAttributeGroupInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<EavDataAttributeGroupInterface, ErrorResponse>({
//         path: `/V1/products/attribute-sets/groups`,
//         method: "POST",
//         body: catalogProductAttributeGroupRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save attribute group
//      *
//      * @tags catalogProductAttributeGroupRepositoryV1
//      * @name CatalogProductAttributeGroupRepositoryV1SavePut
//      * @request PUT:/V1/products/attribute-sets/{attributeSetId}/groups
//      */
//     catalogProductAttributeGroupRepositoryV1SavePut: (
//       attributeSetId: string,
//       catalogProductAttributeGroupRepositoryV1SavePutBody: { group: EavDataAttributeGroupInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<EavDataAttributeGroupInterface, ErrorResponse>({
//         path: `/V1/products/attribute-sets/${attributeSetId}/groups`,
//         method: "PUT",
//         body: catalogProductAttributeGroupRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Remove attribute group by id
//      *
//      * @tags catalogProductAttributeGroupRepositoryV1
//      * @name CatalogProductAttributeGroupRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/products/attribute-sets/groups/{groupId}
//      */
//     catalogProductAttributeGroupRepositoryV1DeleteByIdDelete: (groupId: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/products/attribute-sets/groups/${groupId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve list of attribute options
//      *
//      * @tags catalogProductAttributeOptionManagementV1
//      * @name CatalogProductAttributeOptionManagementV1GetItemsGet
//      * @request GET:/V1/products/attributes/{attributeCode}/options
//      */
//     catalogProductAttributeOptionManagementV1GetItemsGet: (attributeCode: string, params: RequestParams = {}) =>
//       this.request<EavDataAttributeOptionInterface[], ErrorResponse>({
//         path: `/V1/products/attributes/${attributeCode}/options`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Add option to attribute
//      *
//      * @tags catalogProductAttributeOptionManagementV1
//      * @name CatalogProductAttributeOptionManagementV1AddPost
//      * @request POST:/V1/products/attributes/{attributeCode}/options
//      */
//     catalogProductAttributeOptionManagementV1AddPost: (
//       attributeCode: string,
//       catalogProductAttributeOptionManagementV1AddPostBody: { option: EavDataAttributeOptionInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<string, ErrorResponse>({
//         path: `/V1/products/attributes/${attributeCode}/options`,
//         method: "POST",
//         body: catalogProductAttributeOptionManagementV1AddPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete option from attribute
//      *
//      * @tags catalogProductAttributeOptionManagementV1
//      * @name CatalogProductAttributeOptionManagementV1DeleteDelete
//      * @request DELETE:/V1/products/attributes/{attributeCode}/options/{optionId}
//      */
//     catalogProductAttributeOptionManagementV1DeleteDelete: (
//       attributeCode: string,
//       optionId: string,
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/products/attributes/${attributeCode}/options/${optionId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Update attribute option
//      *
//      * @tags catalogProductAttributeOptionUpdateV1
//      * @name CatalogProductAttributeOptionUpdateV1UpdatePut
//      * @request PUT:/V1/products/attributes/{attributeCode}/options/{optionId}
//      */
//     catalogProductAttributeOptionUpdateV1UpdatePut: (
//       attributeCode: string,
//       optionId: number,
//       catalogProductAttributeOptionUpdateV1UpdatePutBody: { option: EavDataAttributeOptionInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/products/attributes/${attributeCode}/options/${optionId}`,
//         method: "PUT",
//         body: catalogProductAttributeOptionUpdateV1UpdatePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve the list of media attributes (fronted input type is media_image) assigned to the given attribute set.
//      *
//      * @tags catalogProductMediaAttributeManagementV1
//      * @name CatalogProductMediaAttributeManagementV1GetListGet
//      * @request GET:/V1/products/media/types/{attributeSetName}
//      */
//     catalogProductMediaAttributeManagementV1GetListGet: (attributeSetName: string, params: RequestParams = {}) =>
//       this.request<CatalogDataProductAttributeInterface[], ErrorResponse>({
//         path: `/V1/products/media/types/${attributeSetName}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Return information about gallery entry
//      *
//      * @tags catalogProductAttributeMediaGalleryManagementV1
//      * @name CatalogProductAttributeMediaGalleryManagementV1GetGet
//      * @request GET:/V1/products/{sku}/media/{entryId}
//      */
//     catalogProductAttributeMediaGalleryManagementV1GetGet: (sku: string, entryId: number, params: RequestParams = {}) =>
//       this.request<CatalogDataProductAttributeMediaGalleryEntryInterface, ErrorResponse>({
//         path: `/V1/products/${sku}/media/${entryId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Update gallery entry
//      *
//      * @tags catalogProductAttributeMediaGalleryManagementV1
//      * @name CatalogProductAttributeMediaGalleryManagementV1UpdatePut
//      * @request PUT:/V1/products/{sku}/media/{entryId}
//      */
//     catalogProductAttributeMediaGalleryManagementV1UpdatePut: (
//       sku: string,
//       entryId: string,
//       catalogProductAttributeMediaGalleryManagementV1UpdatePutBody: {
//         entry: CatalogDataProductAttributeMediaGalleryEntryInterface;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/products/${sku}/media/${entryId}`,
//         method: "PUT",
//         body: catalogProductAttributeMediaGalleryManagementV1UpdatePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Remove gallery entry
//      *
//      * @tags catalogProductAttributeMediaGalleryManagementV1
//      * @name CatalogProductAttributeMediaGalleryManagementV1RemoveDelete
//      * @request DELETE:/V1/products/{sku}/media/{entryId}
//      */
//     catalogProductAttributeMediaGalleryManagementV1RemoveDelete: (
//       sku: string,
//       entryId: number,
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/products/${sku}/media/${entryId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Create new gallery entry
//      *
//      * @tags catalogProductAttributeMediaGalleryManagementV1
//      * @name CatalogProductAttributeMediaGalleryManagementV1CreatePost
//      * @request POST:/V1/products/{sku}/media
//      */
//     catalogProductAttributeMediaGalleryManagementV1CreatePost: (
//       sku: string,
//       catalogProductAttributeMediaGalleryManagementV1CreatePostBody: {
//         entry: CatalogDataProductAttributeMediaGalleryEntryInterface;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/products/${sku}/media`,
//         method: "POST",
//         body: catalogProductAttributeMediaGalleryManagementV1CreatePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve the list of gallery entries associated with given product
//      *
//      * @tags catalogProductAttributeMediaGalleryManagementV1
//      * @name CatalogProductAttributeMediaGalleryManagementV1GetListGet
//      * @request GET:/V1/products/{sku}/media
//      */
//     catalogProductAttributeMediaGalleryManagementV1GetListGet: (sku: string, params: RequestParams = {}) =>
//       this.request<CatalogDataProductAttributeMediaGalleryEntryInterface[], ErrorResponse>({
//         path: `/V1/products/${sku}/media`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get tier price of product
//      *
//      * @tags catalogProductTierPriceManagementV1
//      * @name CatalogProductTierPriceManagementV1GetListGet
//      * @request GET:/V1/products/{sku}/group-prices/{customerGroupId}/tiers
//      */
//     catalogProductTierPriceManagementV1GetListGet: (sku: string, customerGroupId: string, params: RequestParams = {}) =>
//       this.request<CatalogDataProductTierPriceInterface[], ErrorResponse>({
//         path: `/V1/products/${sku}/group-prices/${customerGroupId}/tiers`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Create tier price for product
//      *
//      * @tags catalogProductTierPriceManagementV1
//      * @name CatalogProductTierPriceManagementV1AddPost
//      * @request POST:/V1/products/{sku}/group-prices/{customerGroupId}/tiers/{qty}/price/{price}
//      */
//     catalogProductTierPriceManagementV1AddPost: (
//       sku: string,
//       customerGroupId: string,
//       price: number,
//       qty: number,
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/products/${sku}/group-prices/${customerGroupId}/tiers/${qty}/price/${price}`,
//         method: "POST",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Remove tier price from product
//      *
//      * @tags catalogProductTierPriceManagementV1
//      * @name CatalogProductTierPriceManagementV1RemoveDelete
//      * @request DELETE:/V1/products/{sku}/group-prices/{customerGroupId}/tiers/{qty}
//      */
//     catalogProductTierPriceManagementV1RemoveDelete: (
//       sku: string,
//       customerGroupId: string,
//       qty: number,
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/products/${sku}/group-prices/${customerGroupId}/tiers/${qty}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Return product prices. In case of at least one of skus is not found exception will be thrown.
//      *
//      * @tags catalogTierPriceStorageV1
//      * @name CatalogTierPriceStorageV1GetPost
//      * @request POST:/V1/products/tier-prices-information
//      */
//     catalogTierPriceStorageV1GetPost: (
//       catalogTierPriceStorageV1GetPostBody: { skus: string[] },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataTierPriceInterface[], ErrorResponse>({
//         path: `/V1/products/tier-prices-information`,
//         method: "POST",
//         body: catalogTierPriceStorageV1GetPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Add or update product prices. If any items will have invalid price, price type, website id, sku, customer group or quantity, they will be marked as failed and excluded from update list and \Magento\Catalog\Api\Data\PriceUpdateResultInterface[] with problem description will be returned. If there were no failed items during update empty array will be returned. If error occurred during the update exception will be thrown.
//      *
//      * @tags catalogTierPriceStorageV1
//      * @name CatalogTierPriceStorageV1UpdatePost
//      * @request POST:/V1/products/tier-prices
//      */
//     catalogTierPriceStorageV1UpdatePost: (
//       catalogTierPriceStorageV1UpdatePostBody: { prices: CatalogDataTierPriceInterface[] },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataPriceUpdateResultInterface[], ErrorResponse>({
//         path: `/V1/products/tier-prices`,
//         method: "POST",
//         body: catalogTierPriceStorageV1UpdatePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Remove existing tier prices and replace them with the new ones. If any items will have invalid price, price type, website id, sku, customer group or quantity, they will be marked as failed and excluded from replace list and \Magento\Catalog\Api\Data\PriceUpdateResultInterface[] with problem description will be returned. If there were no failed items during update empty array will be returned. If error occurred during the update exception will be thrown.
//      *
//      * @tags catalogTierPriceStorageV1
//      * @name CatalogTierPriceStorageV1ReplacePut
//      * @request PUT:/V1/products/tier-prices
//      */
//     catalogTierPriceStorageV1ReplacePut: (
//       catalogTierPriceStorageV1ReplacePutBody: { prices: CatalogDataTierPriceInterface[] },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataPriceUpdateResultInterface[], ErrorResponse>({
//         path: `/V1/products/tier-prices`,
//         method: "PUT",
//         body: catalogTierPriceStorageV1ReplacePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete product tier prices. If any items will have invalid price, price type, website id, sku, customer group or quantity, they will be marked as failed and excluded from delete list and \Magento\Catalog\Api\Data\PriceUpdateResultInterface[] with problem description will be returned. If there were no failed items during update empty array will be returned. If error occurred during the update exception will be thrown.
//      *
//      * @tags catalogTierPriceStorageV1
//      * @name CatalogTierPriceStorageV1DeletePost
//      * @request POST:/V1/products/tier-prices-delete
//      */
//     catalogTierPriceStorageV1DeletePost: (
//       catalogTierPriceStorageV1DeletePostBody: { prices: CatalogDataTierPriceInterface[] },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataPriceUpdateResultInterface[], ErrorResponse>({
//         path: `/V1/products/tier-prices-delete`,
//         method: "POST",
//         body: catalogTierPriceStorageV1DeletePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Return product prices. In case of at least one of skus is not found exception will be thrown.
//      *
//      * @tags catalogBasePriceStorageV1
//      * @name CatalogBasePriceStorageV1GetPost
//      * @request POST:/V1/products/base-prices-information
//      */
//     catalogBasePriceStorageV1GetPost: (
//       catalogBasePriceStorageV1GetPostBody: { skus: string[] },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataBasePriceInterface[], ErrorResponse>({
//         path: `/V1/products/base-prices-information`,
//         method: "POST",
//         body: catalogBasePriceStorageV1GetPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Add or update product prices. Input item should correspond \Magento\Catalog\Api\Data\CostInterface. If any items will have invalid price, store id or sku, they will be marked as failed and excluded from update list and \Magento\Catalog\Api\Data\PriceUpdateResultInterface[] with problem description will be returned. If there were no failed items during update empty array will be returned. If error occurred during the update exception will be thrown.
//      *
//      * @tags catalogBasePriceStorageV1
//      * @name CatalogBasePriceStorageV1UpdatePost
//      * @request POST:/V1/products/base-prices
//      */
//     catalogBasePriceStorageV1UpdatePost: (
//       catalogBasePriceStorageV1UpdatePostBody: { prices: CatalogDataBasePriceInterface[] },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataPriceUpdateResultInterface[], ErrorResponse>({
//         path: `/V1/products/base-prices`,
//         method: "POST",
//         body: catalogBasePriceStorageV1UpdatePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Return product prices. In case of at least one of skus is not found exception will be thrown.
//      *
//      * @tags catalogCostStorageV1
//      * @name CatalogCostStorageV1GetPost
//      * @request POST:/V1/products/cost-information
//      */
//     catalogCostStorageV1GetPost: (catalogCostStorageV1GetPostBody: { skus: string[] }, params: RequestParams = {}) =>
//       this.request<CatalogDataCostInterface[], ErrorResponse>({
//         path: `/V1/products/cost-information`,
//         method: "POST",
//         body: catalogCostStorageV1GetPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Add or update product cost. Input item should correspond to \Magento\Catalog\Api\Data\CostInterface. If any items will have invalid cost, store id or sku, they will be marked as failed and excluded from update list and \Magento\Catalog\Api\Data\PriceUpdateResultInterface[] with problem description will be returned. If there were no failed items during update empty array will be returned. If error occurred during the update exception will be thrown.
//      *
//      * @tags catalogCostStorageV1
//      * @name CatalogCostStorageV1UpdatePost
//      * @request POST:/V1/products/cost
//      */
//     catalogCostStorageV1UpdatePost: (
//       catalogCostStorageV1UpdatePostBody: { prices: CatalogDataCostInterface[] },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataPriceUpdateResultInterface[], ErrorResponse>({
//         path: `/V1/products/cost`,
//         method: "POST",
//         body: catalogCostStorageV1UpdatePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete product cost. In case of at least one of skus is not found exception will be thrown. If error occurred during the delete exception will be thrown.
//      *
//      * @tags catalogCostStorageV1
//      * @name CatalogCostStorageV1DeletePost
//      * @request POST:/V1/products/cost-delete
//      */
//     catalogCostStorageV1DeletePost: (
//       catalogCostStorageV1DeletePostBody: { skus: string[] },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/products/cost-delete`,
//         method: "POST",
//         body: catalogCostStorageV1DeletePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Return product's special price. In case of at least one of skus is not found exception will be thrown.
//      *
//      * @tags catalogSpecialPriceStorageV1
//      * @name CatalogSpecialPriceStorageV1GetPost
//      * @request POST:/V1/products/special-price-information
//      */
//     catalogSpecialPriceStorageV1GetPost: (
//       catalogSpecialPriceStorageV1GetPostBody: { skus: string[] },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataSpecialPriceInterface[], ErrorResponse>({
//         path: `/V1/products/special-price-information`,
//         method: "POST",
//         body: catalogSpecialPriceStorageV1GetPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Add or update product's special price. If any items will have invalid price, store id, sku or dates, they will be marked as failed and excluded from update list and \Magento\Catalog\Api\Data\PriceUpdateResultInterface[] with problem description will be returned. If there were no failed items during update empty array will be returned. If error occurred during the update exception will be thrown.
//      *
//      * @tags catalogSpecialPriceStorageV1
//      * @name CatalogSpecialPriceStorageV1UpdatePost
//      * @request POST:/V1/products/special-price
//      */
//     catalogSpecialPriceStorageV1UpdatePost: (
//       catalogSpecialPriceStorageV1UpdatePostBody: { prices: CatalogDataSpecialPriceInterface[] },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataPriceUpdateResultInterface[], ErrorResponse>({
//         path: `/V1/products/special-price`,
//         method: "POST",
//         body: catalogSpecialPriceStorageV1UpdatePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete product's special price. If any items will have invalid price, store id, sku or dates, they will be marked as failed and excluded from delete list and \Magento\Catalog\Api\Data\PriceUpdateResultInterface[] with problem description will be returned. If there were no failed items during update empty array will be returned. If error occurred during the delete exception will be thrown.
//      *
//      * @tags catalogSpecialPriceStorageV1
//      * @name CatalogSpecialPriceStorageV1DeletePost
//      * @request POST:/V1/products/special-price-delete
//      */
//     catalogSpecialPriceStorageV1DeletePost: (
//       catalogSpecialPriceStorageV1DeletePostBody: { prices: CatalogDataSpecialPriceInterface[] },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataPriceUpdateResultInterface[], ErrorResponse>({
//         path: `/V1/products/special-price-delete`,
//         method: "POST",
//         body: catalogSpecialPriceStorageV1DeletePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete category by identifier
//      *
//      * @tags catalogCategoryRepositoryV1
//      * @name CatalogCategoryRepositoryV1DeleteByIdentifierDelete
//      * @request DELETE:/V1/categories/{categoryId}
//      */
//     catalogCategoryRepositoryV1DeleteByIdentifierDelete: (categoryId: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/categories/${categoryId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get info about category by category id
//      *
//      * @tags catalogCategoryRepositoryV1
//      * @name CatalogCategoryRepositoryV1GetGet
//      * @request GET:/V1/categories/{categoryId}
//      */
//     catalogCategoryRepositoryV1GetGet: (categoryId: number, query?: { storeId?: number }, params: RequestParams = {}) =>
//       this.request<CatalogDataCategoryInterface, ErrorResponse>({
//         path: `/V1/categories/${categoryId}`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Create category service
//      *
//      * @tags catalogCategoryRepositoryV1
//      * @name CatalogCategoryRepositoryV1SavePost
//      * @request POST:/V1/categories
//      */
//     catalogCategoryRepositoryV1SavePost: (
//       catalogCategoryRepositoryV1SavePostBody: { category: CatalogDataCategoryInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataCategoryInterface, ErrorResponse>({
//         path: `/V1/categories`,
//         method: "POST",
//         body: catalogCategoryRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve list of categories
//      *
//      * @tags catalogCategoryManagementV1
//      * @name CatalogCategoryManagementV1GetTreeGet
//      * @request GET:/V1/categories
//      */
//     catalogCategoryManagementV1GetTreeGet: (
//       query?: { rootCategoryId?: number; depth?: number },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataCategoryTreeInterface, ErrorResponse>({
//         path: `/V1/categories`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Create category service
//      *
//      * @tags catalogCategoryRepositoryV1
//      * @name CatalogCategoryRepositoryV1SavePut
//      * @request PUT:/V1/categories/{id}
//      */
//     catalogCategoryRepositoryV1SavePut: (
//       id: string,
//       catalogCategoryRepositoryV1SavePutBody: { category: CatalogDataCategoryInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataCategoryInterface, ErrorResponse>({
//         path: `/V1/categories/${id}`,
//         method: "PUT",
//         body: catalogCategoryRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Move category
//      *
//      * @tags catalogCategoryManagementV1
//      * @name CatalogCategoryManagementV1MovePut
//      * @request PUT:/V1/categories/{categoryId}/move
//      */
//     catalogCategoryManagementV1MovePut: (
//       categoryId: number,
//       catalogCategoryManagementV1MovePutBody: { parentId: number; afterId?: number },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/categories/${categoryId}/move`,
//         method: "PUT",
//         body: catalogCategoryManagementV1MovePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get category list
//      *
//      * @tags catalogCategoryListV1
//      * @name CatalogCategoryListV1GetListGet
//      * @request GET:/V1/categories/list
//      */
//     catalogCategoryListV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataCategorySearchResultsInterface, ErrorResponse>({
//         path: `/V1/categories/list`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get custom option types
//      *
//      * @tags catalogProductCustomOptionTypeListV1
//      * @name CatalogProductCustomOptionTypeListV1GetItemsGet
//      * @request GET:/V1/products/options/types
//      */
//     catalogProductCustomOptionTypeListV1GetItemsGet: (params: RequestParams = {}) =>
//       this.request<CatalogDataProductCustomOptionTypeInterface[], ErrorResponse>({
//         path: `/V1/products/options/types`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get the list of custom options for a specific product
//      *
//      * @tags catalogProductCustomOptionRepositoryV1
//      * @name CatalogProductCustomOptionRepositoryV1GetListGet
//      * @request GET:/V1/products/{sku}/options
//      */
//     catalogProductCustomOptionRepositoryV1GetListGet: (sku: string, params: RequestParams = {}) =>
//       this.request<CatalogDataProductCustomOptionInterface[], ErrorResponse>({
//         path: `/V1/products/${sku}/options`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get custom option for a specific product
//      *
//      * @tags catalogProductCustomOptionRepositoryV1
//      * @name CatalogProductCustomOptionRepositoryV1GetGet
//      * @request GET:/V1/products/{sku}/options/{optionId}
//      */
//     catalogProductCustomOptionRepositoryV1GetGet: (sku: string, optionId: number, params: RequestParams = {}) =>
//       this.request<CatalogDataProductCustomOptionInterface, ErrorResponse>({
//         path: `/V1/products/${sku}/options/${optionId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags catalogProductCustomOptionRepositoryV1
//      * @name CatalogProductCustomOptionRepositoryV1DeleteByIdentifierDelete
//      * @request DELETE:/V1/products/{sku}/options/{optionId}
//      */
//     catalogProductCustomOptionRepositoryV1DeleteByIdentifierDelete: (
//       sku: string,
//       optionId: number,
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/products/${sku}/options/${optionId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save Custom Option
//      *
//      * @tags catalogProductCustomOptionRepositoryV1
//      * @name CatalogProductCustomOptionRepositoryV1SavePost
//      * @request POST:/V1/products/options
//      */
//     catalogProductCustomOptionRepositoryV1SavePost: (
//       catalogProductCustomOptionRepositoryV1SavePostBody: { option: CatalogDataProductCustomOptionInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataProductCustomOptionInterface, ErrorResponse>({
//         path: `/V1/products/options`,
//         method: "POST",
//         body: catalogProductCustomOptionRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save Custom Option
//      *
//      * @tags catalogProductCustomOptionRepositoryV1
//      * @name CatalogProductCustomOptionRepositoryV1SavePut
//      * @request PUT:/V1/products/options/{optionId}
//      */
//     catalogProductCustomOptionRepositoryV1SavePut: (
//       optionId: string,
//       catalogProductCustomOptionRepositoryV1SavePutBody: { option: CatalogDataProductCustomOptionInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataProductCustomOptionInterface, ErrorResponse>({
//         path: `/V1/products/options/${optionId}`,
//         method: "PUT",
//         body: catalogProductCustomOptionRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve information about available product link types
//      *
//      * @tags catalogProductLinkTypeListV1
//      * @name CatalogProductLinkTypeListV1GetItemsGet
//      * @request GET:/V1/products/links/types
//      */
//     catalogProductLinkTypeListV1GetItemsGet: (params: RequestParams = {}) =>
//       this.request<CatalogDataProductLinkTypeInterface[], ErrorResponse>({
//         path: `/V1/products/links/types`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Provide a list of the product link type attributes
//      *
//      * @tags catalogProductLinkTypeListV1
//      * @name CatalogProductLinkTypeListV1GetItemAttributesGet
//      * @request GET:/V1/products/links/{type}/attributes
//      */
//     catalogProductLinkTypeListV1GetItemAttributesGet: (type: string, params: RequestParams = {}) =>
//       this.request<CatalogDataProductLinkAttributeInterface[], ErrorResponse>({
//         path: `/V1/products/links/${type}/attributes`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Provide the list of links for a specific product
//      *
//      * @tags catalogProductLinkManagementV1
//      * @name CatalogProductLinkManagementV1GetLinkedItemsByTypeGet
//      * @request GET:/V1/products/{sku}/links/{type}
//      */
//     catalogProductLinkManagementV1GetLinkedItemsByTypeGet: (sku: string, type: string, params: RequestParams = {}) =>
//       this.request<CatalogDataProductLinkInterface[], ErrorResponse>({
//         path: `/V1/products/${sku}/links/${type}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Assign a product link to another product
//      *
//      * @tags catalogProductLinkManagementV1
//      * @name CatalogProductLinkManagementV1SetProductLinksPost
//      * @request POST:/V1/products/{sku}/links
//      */
//     catalogProductLinkManagementV1SetProductLinksPost: (
//       sku: string,
//       catalogProductLinkManagementV1SetProductLinksPostBody: { items: CatalogDataProductLinkInterface[] },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/products/${sku}/links`,
//         method: "POST",
//         body: catalogProductLinkManagementV1SetProductLinksPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save product link
//      *
//      * @tags catalogProductLinkRepositoryV1
//      * @name CatalogProductLinkRepositoryV1SavePut
//      * @request PUT:/V1/products/{sku}/links
//      */
//     catalogProductLinkRepositoryV1SavePut: (
//       sku: string,
//       catalogProductLinkRepositoryV1SavePutBody: { entity: CatalogDataProductLinkInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/products/${sku}/links`,
//         method: "PUT",
//         body: catalogProductLinkRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags catalogProductLinkRepositoryV1
//      * @name CatalogProductLinkRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/products/{sku}/links/{type}/{linkedProductSku}
//      */
//     catalogProductLinkRepositoryV1DeleteByIdDelete: (
//       sku: string,
//       type: string,
//       linkedProductSku: string,
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/products/${sku}/links/${type}/${linkedProductSku}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get products assigned to category
//      *
//      * @tags catalogCategoryLinkManagementV1
//      * @name CatalogCategoryLinkManagementV1GetAssignedProductsGet
//      * @request GET:/V1/categories/{categoryId}/products
//      */
//     catalogCategoryLinkManagementV1GetAssignedProductsGet: (categoryId: number, params: RequestParams = {}) =>
//       this.request<CatalogDataCategoryProductLinkInterface[], ErrorResponse>({
//         path: `/V1/categories/${categoryId}/products`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Assign a product to the required category
//      *
//      * @tags catalogCategoryLinkRepositoryV1
//      * @name CatalogCategoryLinkRepositoryV1SavePost
//      * @request POST:/V1/categories/{categoryId}/products
//      */
//     catalogCategoryLinkRepositoryV1SavePost: (
//       categoryId: string,
//       catalogCategoryLinkRepositoryV1SavePostBody: { productLink: CatalogDataCategoryProductLinkInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/categories/${categoryId}/products`,
//         method: "POST",
//         body: catalogCategoryLinkRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Assign a product to the required category
//      *
//      * @tags catalogCategoryLinkRepositoryV1
//      * @name CatalogCategoryLinkRepositoryV1SavePut
//      * @request PUT:/V1/categories/{categoryId}/products
//      */
//     catalogCategoryLinkRepositoryV1SavePut: (
//       categoryId: string,
//       catalogCategoryLinkRepositoryV1SavePutBody: { productLink: CatalogDataCategoryProductLinkInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/categories/${categoryId}/products`,
//         method: "PUT",
//         body: catalogCategoryLinkRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Remove the product assignment from the category by category id and sku
//      *
//      * @tags catalogCategoryLinkRepositoryV1
//      * @name CatalogCategoryLinkRepositoryV1DeleteByIdsDelete
//      * @request DELETE:/V1/categories/{categoryId}/products/{sku}
//      */
//     catalogCategoryLinkRepositoryV1DeleteByIdsDelete: (categoryId: number, sku: string, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/categories/${categoryId}/products/${sku}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Assign a product to the website
//      *
//      * @tags catalogProductWebsiteLinkRepositoryV1
//      * @name CatalogProductWebsiteLinkRepositoryV1SavePost
//      * @request POST:/V1/products/{sku}/websites
//      */
//     catalogProductWebsiteLinkRepositoryV1SavePost: (
//       sku: string,
//       catalogProductWebsiteLinkRepositoryV1SavePostBody: { productWebsiteLink: CatalogDataProductWebsiteLinkInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/products/${sku}/websites`,
//         method: "POST",
//         body: catalogProductWebsiteLinkRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Assign a product to the website
//      *
//      * @tags catalogProductWebsiteLinkRepositoryV1
//      * @name CatalogProductWebsiteLinkRepositoryV1SavePut
//      * @request PUT:/V1/products/{sku}/websites
//      */
//     catalogProductWebsiteLinkRepositoryV1SavePut: (
//       sku: string,
//       catalogProductWebsiteLinkRepositoryV1SavePutBody: { productWebsiteLink: CatalogDataProductWebsiteLinkInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/products/${sku}/websites`,
//         method: "PUT",
//         body: catalogProductWebsiteLinkRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Remove the website assignment from the product by product sku
//      *
//      * @tags catalogProductWebsiteLinkRepositoryV1
//      * @name CatalogProductWebsiteLinkRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/products/{sku}/websites/{websiteId}
//      */
//     catalogProductWebsiteLinkRepositoryV1DeleteByIdDelete: (
//       sku: string,
//       websiteId: number,
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/products/${sku}/websites/${websiteId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Collect and retrieve the list of product render info. This info contains raw prices and formatted prices, product name, stock status, store_id, etc.
//      *
//      * @tags catalogProductRenderListV1
//      * @name CatalogProductRenderListV1GetListGet
//      * @request GET:/V1/products-render-info
//      */
//     catalogProductRenderListV1GetListGet: (
//       query: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//         storeId: number;
//         currencyCode: string;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataProductRenderSearchResultsInterface, ErrorResponse>({
//         path: `/V1/products-render-info`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags catalogInventoryStockRegistryV1
//      * @name CatalogInventoryStockRegistryV1GetStockItemBySkuGet
//      * @request GET:/V1/stockItems/{productSku}
//      */
//     catalogInventoryStockRegistryV1GetStockItemBySkuGet: (
//       productSku: string,
//       query?: { scopeId?: number },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogInventoryDataStockItemInterface, ErrorResponse>({
//         path: `/V1/stockItems/${productSku}`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags catalogInventoryStockRegistryV1
//      * @name CatalogInventoryStockRegistryV1UpdateStockItemBySkuPut
//      * @request PUT:/V1/products/{productSku}/stockItems/{itemId}
//      */
//     catalogInventoryStockRegistryV1UpdateStockItemBySkuPut: (
//       productSku: string,
//       itemId: string,
//       catalogInventoryStockRegistryV1UpdateStockItemBySkuPutBody: { stockItem: CatalogInventoryDataStockItemInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/products/${productSku}/stockItems/${itemId}`,
//         method: "PUT",
//         body: catalogInventoryStockRegistryV1UpdateStockItemBySkuPutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieves a list of SKU's with low inventory qty
//      *
//      * @tags catalogInventoryStockRegistryV1
//      * @name CatalogInventoryStockRegistryV1GetLowStockItemsGet
//      * @request GET:/V1/stockItems/lowStock/
//      */
//     catalogInventoryStockRegistryV1GetLowStockItemsGet: (
//       query: { scopeId: number; qty: number; currentPage?: number; pageSize?: number },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogInventoryDataStockItemCollectionInterface, ErrorResponse>({
//         path: `/V1/stockItems/lowStock/`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags catalogInventoryStockRegistryV1
//      * @name CatalogInventoryStockRegistryV1GetStockStatusBySkuGet
//      * @request GET:/V1/stockStatuses/{productSku}
//      */
//     catalogInventoryStockRegistryV1GetStockStatusBySkuGet: (
//       productSku: string,
//       query?: { scopeId?: number },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogInventoryDataStockStatusInterface, ErrorResponse>({
//         path: `/V1/stockStatuses/${productSku}`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Enables an administrative user to return information for a specified cart.
//      *
//      * @tags quoteCartRepositoryV1
//      * @name QuoteCartRepositoryV1GetGet
//      * @request GET:/V1/carts/{cartId}
//      */
//     quoteCartRepositoryV1GetGet: (cartId: number, params: RequestParams = {}) =>
//       this.request<QuoteDataCartInterface, ErrorResponse>({
//         path: `/V1/carts/${cartId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Assigns a specified customer to a specified shopping cart.
//      *
//      * @tags quoteCartManagementV1
//      * @name QuoteCartManagementV1AssignCustomerPut
//      * @request PUT:/V1/carts/{cartId}
//      */
//     quoteCartManagementV1AssignCustomerPut: (
//       cartId: number,
//       quoteCartManagementV1AssignCustomerPutBody: { customerId: number; storeId: number },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/carts/${cartId}`,
//         method: "PUT",
//         body: quoteCartManagementV1AssignCustomerPutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Enables administrative users to list carts that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See https://devdocs.magento.com/codelinks/attributes.html#CartRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
//      *
//      * @tags quoteCartRepositoryV1
//      * @name QuoteCartRepositoryV1GetListGet
//      * @request GET:/V1/carts/search
//      */
//     quoteCartRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<QuoteDataCartSearchResultsInterface, ErrorResponse>({
//         path: `/V1/carts/search`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save quote
//      *
//      * @tags quoteCartRepositoryV1
//      * @name QuoteCartRepositoryV1SavePut
//      * @request PUT:/V1/carts/mine
//      */
//     quoteCartRepositoryV1SavePut: (
//       quoteCartRepositoryV1SavePutBody: { quote: QuoteDataCartInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<any, ErrorResponse>({
//         path: `/V1/carts/mine`,
//         method: "PUT",
//         body: quoteCartRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * @description Creates an empty cart and quote for a specified customer if customer does not have a cart yet.
//      *
//      * @tags quoteCartManagementV1
//      * @name QuoteCartManagementV1CreateEmptyCartForCustomerPost
//      * @request POST:/V1/carts/mine
//      */
//     quoteCartManagementV1CreateEmptyCartForCustomerPost: (params: RequestParams = {}) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/carts/mine`,
//         method: "POST",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Returns information for the cart for a specified customer.
//      *
//      * @tags quoteCartManagementV1
//      * @name QuoteCartManagementV1GetCartForCustomerGet
//      * @request GET:/V1/carts/mine
//      */
//     quoteCartManagementV1GetCartForCustomerGet: (params: RequestParams = {}) =>
//       this.request<QuoteDataCartInterface, ErrorResponse>({
//         path: `/V1/carts/mine`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Creates an empty cart and quote for a guest.
//      *
//      * @tags quoteCartManagementV1
//      * @name QuoteCartManagementV1CreateEmptyCartPost
//      * @request POST:/V1/carts/
//      */
//     quoteCartManagementV1CreateEmptyCartPost: (params: RequestParams = {}) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/carts/`,
//         method: "POST",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Creates an empty cart and quote for a specified customer if customer does not have a cart yet.
//      *
//      * @tags quoteCartManagementV1
//      * @name QuoteCartManagementV1CreateEmptyCartForCustomerPost2
//      * @request POST:/V1/customers/{customerId}/carts
//      * @originalName quoteCartManagementV1CreateEmptyCartForCustomerPost
//      * @duplicate
//      */
//     quoteCartManagementV1CreateEmptyCartForCustomerPost2: (customerId: number, params: RequestParams = {}) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/customers/${customerId}/carts`,
//         method: "POST",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Places an order for a specified cart.
//      *
//      * @tags quoteCartManagementV1
//      * @name QuoteCartManagementV1PlaceOrderPut
//      * @request PUT:/V1/carts/mine/order
//      */
//     quoteCartManagementV1PlaceOrderPut: (
//       quoteCartManagementV1PlaceOrderPutBody: { paymentMethod?: QuoteDataPaymentInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/carts/mine/order`,
//         method: "PUT",
//         body: quoteCartManagementV1PlaceOrderPutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Places an order for a specified cart.
//      *
//      * @tags quoteCartManagementV1
//      * @name QuoteCartManagementV1PlaceOrderPut2
//      * @request PUT:/V1/carts/{cartId}/order
//      * @originalName quoteCartManagementV1PlaceOrderPut
//      * @duplicate
//      */
//     quoteCartManagementV1PlaceOrderPut2: (
//       cartId: number,
//       quoteCartManagementV1PlaceOrderPutBody: { paymentMethod?: QuoteDataPaymentInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/carts/${cartId}/order`,
//         method: "PUT",
//         body: quoteCartManagementV1PlaceOrderPutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Enable a guest user to return information for a specified cart.
//      *
//      * @tags quoteGuestCartRepositoryV1
//      * @name QuoteGuestCartRepositoryV1GetGet
//      * @request GET:/V1/guest-carts/{cartId}
//      */
//     quoteGuestCartRepositoryV1GetGet: (cartId: string, params: RequestParams = {}) =>
//       this.request<QuoteDataCartInterface, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Assign a specified customer to a specified shopping cart.
//      *
//      * @tags quoteGuestCartManagementV1
//      * @name QuoteGuestCartManagementV1AssignCustomerPut
//      * @request PUT:/V1/guest-carts/{cartId}
//      */
//     quoteGuestCartManagementV1AssignCustomerPut: (
//       cartId: string,
//       quoteGuestCartManagementV1AssignCustomerPutBody: { customerId: number; storeId: number },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}`,
//         method: "PUT",
//         body: quoteGuestCartManagementV1AssignCustomerPutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Enable an customer or guest user to create an empty cart and quote for an anonymous customer.
//      *
//      * @tags quoteGuestCartManagementV1
//      * @name QuoteGuestCartManagementV1CreateEmptyCartPost
//      * @request POST:/V1/guest-carts
//      */
//     quoteGuestCartManagementV1CreateEmptyCartPost: (params: RequestParams = {}) =>
//       this.request<string, ErrorResponse>({
//         path: `/V1/guest-carts`,
//         method: "POST",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Place an order for a specified cart.
//      *
//      * @tags quoteGuestCartManagementV1
//      * @name QuoteGuestCartManagementV1PlaceOrderPut
//      * @request PUT:/V1/guest-carts/{cartId}/order
//      */
//     quoteGuestCartManagementV1PlaceOrderPut: (
//       cartId: string,
//       quoteGuestCartManagementV1PlaceOrderPutBody: { paymentMethod?: QuoteDataPaymentInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/order`,
//         method: "PUT",
//         body: quoteGuestCartManagementV1PlaceOrderPutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Lists applicable shipping methods for a specified quote.
//      *
//      * @tags quoteShippingMethodManagementV1
//      * @name QuoteShippingMethodManagementV1GetListGet
//      * @request GET:/V1/carts/{cartId}/shipping-methods
//      */
//     quoteShippingMethodManagementV1GetListGet: (cartId: number, params: RequestParams = {}) =>
//       this.request<QuoteDataShippingMethodInterface[], ErrorResponse>({
//         path: `/V1/carts/${cartId}/shipping-methods`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Estimate shipping
//      *
//      * @tags quoteShippingMethodManagementV1
//      * @name QuoteShippingMethodManagementV1EstimateByAddressIdPost
//      * @request POST:/V1/carts/{cartId}/estimate-shipping-methods-by-address-id
//      */
//     quoteShippingMethodManagementV1EstimateByAddressIdPost: (
//       cartId: number,
//       quoteShippingMethodManagementV1EstimateByAddressIdPostBody: { addressId: number },
//       params: RequestParams = {},
//     ) =>
//       this.request<QuoteDataShippingMethodInterface[], ErrorResponse>({
//         path: `/V1/carts/${cartId}/estimate-shipping-methods-by-address-id`,
//         method: "POST",
//         body: quoteShippingMethodManagementV1EstimateByAddressIdPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Lists applicable shipping methods for a specified quote.
//      *
//      * @tags quoteShippingMethodManagementV1
//      * @name QuoteShippingMethodManagementV1GetListGet2
//      * @request GET:/V1/carts/mine/shipping-methods
//      * @originalName quoteShippingMethodManagementV1GetListGet
//      * @duplicate
//      */
//     quoteShippingMethodManagementV1GetListGet2: (params: RequestParams = {}) =>
//       this.request<QuoteDataShippingMethodInterface[], ErrorResponse>({
//         path: `/V1/carts/mine/shipping-methods`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Estimate shipping
//      *
//      * @tags quoteShippingMethodManagementV1
//      * @name QuoteShippingMethodManagementV1EstimateByAddressIdPost2
//      * @request POST:/V1/carts/mine/estimate-shipping-methods-by-address-id
//      * @originalName quoteShippingMethodManagementV1EstimateByAddressIdPost
//      * @duplicate
//      */
//     quoteShippingMethodManagementV1EstimateByAddressIdPost2: (
//       quoteShippingMethodManagementV1EstimateByAddressIdPostBody: { addressId: number },
//       params: RequestParams = {},
//     ) =>
//       this.request<QuoteDataShippingMethodInterface[], ErrorResponse>({
//         path: `/V1/carts/mine/estimate-shipping-methods-by-address-id`,
//         method: "POST",
//         body: quoteShippingMethodManagementV1EstimateByAddressIdPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Estimate shipping by address and return list of available shipping methods
//      *
//      * @tags quoteShipmentEstimationV1
//      * @name QuoteShipmentEstimationV1EstimateByExtendedAddressPost
//      * @request POST:/V1/carts/{cartId}/estimate-shipping-methods
//      */
//     quoteShipmentEstimationV1EstimateByExtendedAddressPost: (
//       cartId: string,
//       quoteShipmentEstimationV1EstimateByExtendedAddressPostBody: { address: QuoteDataAddressInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<QuoteDataShippingMethodInterface[], ErrorResponse>({
//         path: `/V1/carts/${cartId}/estimate-shipping-methods`,
//         method: "POST",
//         body: quoteShipmentEstimationV1EstimateByExtendedAddressPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Estimate shipping by address and return list of available shipping methods
//      *
//      * @tags quoteShipmentEstimationV1
//      * @name QuoteShipmentEstimationV1EstimateByExtendedAddressPost2
//      * @request POST:/V1/carts/mine/estimate-shipping-methods
//      * @originalName quoteShipmentEstimationV1EstimateByExtendedAddressPost
//      * @duplicate
//      */
//     quoteShipmentEstimationV1EstimateByExtendedAddressPost2: (
//       quoteShipmentEstimationV1EstimateByExtendedAddressPostBody: { address: QuoteDataAddressInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<QuoteDataShippingMethodInterface[], ErrorResponse>({
//         path: `/V1/carts/mine/estimate-shipping-methods`,
//         method: "POST",
//         body: quoteShipmentEstimationV1EstimateByExtendedAddressPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description List applicable shipping methods for a specified quote.
//      *
//      * @tags quoteGuestShippingMethodManagementV1
//      * @name QuoteGuestShippingMethodManagementV1GetListGet
//      * @request GET:/V1/guest-carts/{cartId}/shipping-methods
//      */
//     quoteGuestShippingMethodManagementV1GetListGet: (cartId: string, params: RequestParams = {}) =>
//       this.request<QuoteDataShippingMethodInterface[], ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/shipping-methods`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Estimate shipping by address and return list of available shipping methods
//      *
//      * @tags quoteGuestShipmentEstimationV1
//      * @name QuoteGuestShipmentEstimationV1EstimateByExtendedAddressPost
//      * @request POST:/V1/guest-carts/{cartId}/estimate-shipping-methods
//      */
//     quoteGuestShipmentEstimationV1EstimateByExtendedAddressPost: (
//       cartId: string,
//       quoteGuestShipmentEstimationV1EstimateByExtendedAddressPostBody: { address: QuoteDataAddressInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<QuoteDataShippingMethodInterface[], ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/estimate-shipping-methods`,
//         method: "POST",
//         body: quoteGuestShipmentEstimationV1EstimateByExtendedAddressPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Lists items that are assigned to a specified cart.
//      *
//      * @tags quoteCartItemRepositoryV1
//      * @name QuoteCartItemRepositoryV1GetListGet
//      * @request GET:/V1/carts/{cartId}/items
//      */
//     quoteCartItemRepositoryV1GetListGet: (cartId: number, params: RequestParams = {}) =>
//       this.request<QuoteDataCartItemInterface[], ErrorResponse>({
//         path: `/V1/carts/${cartId}/items`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Add/update the specified cart item.
//      *
//      * @tags quoteCartItemRepositoryV1
//      * @name QuoteCartItemRepositoryV1SavePost
//      * @request POST:/V1/carts/{quoteId}/items
//      */
//     quoteCartItemRepositoryV1SavePost: (
//       quoteId: string,
//       quoteCartItemRepositoryV1SavePostBody: { cartItem: QuoteDataCartItemInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<QuoteDataCartItemInterface, ErrorResponse>({
//         path: `/V1/carts/${quoteId}/items`,
//         method: "POST",
//         body: quoteCartItemRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Add/update the specified cart item.
//      *
//      * @tags quoteCartItemRepositoryV1
//      * @name QuoteCartItemRepositoryV1SavePut
//      * @request PUT:/V1/carts/{cartId}/items/{itemId}
//      */
//     quoteCartItemRepositoryV1SavePut: (
//       cartId: string,
//       itemId: string,
//       quoteCartItemRepositoryV1SavePutBody: { cartItem: QuoteDataCartItemInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<QuoteDataCartItemInterface, ErrorResponse>({
//         path: `/V1/carts/${cartId}/items/${itemId}`,
//         method: "PUT",
//         body: quoteCartItemRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Removes the specified item from the specified cart.
//      *
//      * @tags quoteCartItemRepositoryV1
//      * @name QuoteCartItemRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/carts/{cartId}/items/{itemId}
//      */
//     quoteCartItemRepositoryV1DeleteByIdDelete: (cartId: number, itemId: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/carts/${cartId}/items/${itemId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Lists items that are assigned to a specified cart.
//      *
//      * @tags quoteCartItemRepositoryV1
//      * @name QuoteCartItemRepositoryV1GetListGet2
//      * @request GET:/V1/carts/mine/items
//      * @originalName quoteCartItemRepositoryV1GetListGet
//      * @duplicate
//      */
//     quoteCartItemRepositoryV1GetListGet2: (params: RequestParams = {}) =>
//       this.request<QuoteDataCartItemInterface[], ErrorResponse>({
//         path: `/V1/carts/mine/items`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Add/update the specified cart item.
//      *
//      * @tags quoteCartItemRepositoryV1
//      * @name QuoteCartItemRepositoryV1SavePost2
//      * @request POST:/V1/carts/mine/items
//      * @originalName quoteCartItemRepositoryV1SavePost
//      * @duplicate
//      */
//     quoteCartItemRepositoryV1SavePost2: (
//       quoteCartItemRepositoryV1SavePostBody: { cartItem: QuoteDataCartItemInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<QuoteDataCartItemInterface, ErrorResponse>({
//         path: `/V1/carts/mine/items`,
//         method: "POST",
//         body: quoteCartItemRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Add/update the specified cart item.
//      *
//      * @tags quoteCartItemRepositoryV1
//      * @name QuoteCartItemRepositoryV1SavePut2
//      * @request PUT:/V1/carts/mine/items/{itemId}
//      * @originalName quoteCartItemRepositoryV1SavePut
//      * @duplicate
//      */
//     quoteCartItemRepositoryV1SavePut2: (
//       itemId: string,
//       quoteCartItemRepositoryV1SavePutBody: { cartItem: QuoteDataCartItemInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<QuoteDataCartItemInterface, ErrorResponse>({
//         path: `/V1/carts/mine/items/${itemId}`,
//         method: "PUT",
//         body: quoteCartItemRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Removes the specified item from the specified cart.
//      *
//      * @tags quoteCartItemRepositoryV1
//      * @name QuoteCartItemRepositoryV1DeleteByIdDelete2
//      * @request DELETE:/V1/carts/mine/items/{itemId}
//      * @originalName quoteCartItemRepositoryV1DeleteByIdDelete
//      * @duplicate
//      */
//     quoteCartItemRepositoryV1DeleteByIdDelete2: (itemId: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/carts/mine/items/${itemId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description List items that are assigned to a specified cart.
//      *
//      * @tags quoteGuestCartItemRepositoryV1
//      * @name QuoteGuestCartItemRepositoryV1GetListGet
//      * @request GET:/V1/guest-carts/{cartId}/items
//      */
//     quoteGuestCartItemRepositoryV1GetListGet: (cartId: string, params: RequestParams = {}) =>
//       this.request<QuoteDataCartItemInterface[], ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/items`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Add/update the specified cart item.
//      *
//      * @tags quoteGuestCartItemRepositoryV1
//      * @name QuoteGuestCartItemRepositoryV1SavePost
//      * @request POST:/V1/guest-carts/{cartId}/items
//      */
//     quoteGuestCartItemRepositoryV1SavePost: (
//       cartId: string,
//       quoteGuestCartItemRepositoryV1SavePostBody: { cartItem: QuoteDataCartItemInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<QuoteDataCartItemInterface, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/items`,
//         method: "POST",
//         body: quoteGuestCartItemRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Add/update the specified cart item.
//      *
//      * @tags quoteGuestCartItemRepositoryV1
//      * @name QuoteGuestCartItemRepositoryV1SavePut
//      * @request PUT:/V1/guest-carts/{cartId}/items/{itemId}
//      */
//     quoteGuestCartItemRepositoryV1SavePut: (
//       cartId: string,
//       itemId: string,
//       quoteGuestCartItemRepositoryV1SavePutBody: { cartItem: QuoteDataCartItemInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<QuoteDataCartItemInterface, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/items/${itemId}`,
//         method: "PUT",
//         body: quoteGuestCartItemRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Remove the specified item from the specified cart.
//      *
//      * @tags quoteGuestCartItemRepositoryV1
//      * @name QuoteGuestCartItemRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/guest-carts/{cartId}/items/{itemId}
//      */
//     quoteGuestCartItemRepositoryV1DeleteByIdDelete: (cartId: string, itemId: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/items/${itemId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Returns the payment method for a specified shopping cart.
//      *
//      * @tags quotePaymentMethodManagementV1
//      * @name QuotePaymentMethodManagementV1GetGet
//      * @request GET:/V1/carts/{cartId}/selected-payment-method
//      */
//     quotePaymentMethodManagementV1GetGet: (cartId: number, params: RequestParams = {}) =>
//       this.request<QuoteDataPaymentInterface, ErrorResponse>({
//         path: `/V1/carts/${cartId}/selected-payment-method`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Adds a specified payment method to a specified shopping cart.
//      *
//      * @tags quotePaymentMethodManagementV1
//      * @name QuotePaymentMethodManagementV1SetPut
//      * @request PUT:/V1/carts/{cartId}/selected-payment-method
//      */
//     quotePaymentMethodManagementV1SetPut: (
//       cartId: number,
//       quotePaymentMethodManagementV1SetPutBody: { method: QuoteDataPaymentInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<string, ErrorResponse>({
//         path: `/V1/carts/${cartId}/selected-payment-method`,
//         method: "PUT",
//         body: quotePaymentMethodManagementV1SetPutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Lists available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See https://devdocs.magento.com/codelinks/attributes.html#PaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.
//      *
//      * @tags quotePaymentMethodManagementV1
//      * @name QuotePaymentMethodManagementV1GetListGet
//      * @request GET:/V1/carts/{cartId}/payment-methods
//      */
//     quotePaymentMethodManagementV1GetListGet: (cartId: number, params: RequestParams = {}) =>
//       this.request<QuoteDataPaymentMethodInterface[], ErrorResponse>({
//         path: `/V1/carts/${cartId}/payment-methods`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Returns the payment method for a specified shopping cart.
//      *
//      * @tags quotePaymentMethodManagementV1
//      * @name QuotePaymentMethodManagementV1GetGet2
//      * @request GET:/V1/carts/mine/selected-payment-method
//      * @originalName quotePaymentMethodManagementV1GetGet
//      * @duplicate
//      */
//     quotePaymentMethodManagementV1GetGet2: (params: RequestParams = {}) =>
//       this.request<QuoteDataPaymentInterface, ErrorResponse>({
//         path: `/V1/carts/mine/selected-payment-method`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Adds a specified payment method to a specified shopping cart.
//      *
//      * @tags quotePaymentMethodManagementV1
//      * @name QuotePaymentMethodManagementV1SetPut2
//      * @request PUT:/V1/carts/mine/selected-payment-method
//      * @originalName quotePaymentMethodManagementV1SetPut
//      * @duplicate
//      */
//     quotePaymentMethodManagementV1SetPut2: (
//       quotePaymentMethodManagementV1SetPutBody: { method: QuoteDataPaymentInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<string, ErrorResponse>({
//         path: `/V1/carts/mine/selected-payment-method`,
//         method: "PUT",
//         body: quotePaymentMethodManagementV1SetPutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Lists available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See https://devdocs.magento.com/codelinks/attributes.html#PaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.
//      *
//      * @tags quotePaymentMethodManagementV1
//      * @name QuotePaymentMethodManagementV1GetListGet2
//      * @request GET:/V1/carts/mine/payment-methods
//      * @originalName quotePaymentMethodManagementV1GetListGet
//      * @duplicate
//      */
//     quotePaymentMethodManagementV1GetListGet2: (params: RequestParams = {}) =>
//       this.request<QuoteDataPaymentMethodInterface[], ErrorResponse>({
//         path: `/V1/carts/mine/payment-methods`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Return the payment method for a specified shopping cart.
//      *
//      * @tags quoteGuestPaymentMethodManagementV1
//      * @name QuoteGuestPaymentMethodManagementV1GetGet
//      * @request GET:/V1/guest-carts/{cartId}/selected-payment-method
//      */
//     quoteGuestPaymentMethodManagementV1GetGet: (cartId: string, params: RequestParams = {}) =>
//       this.request<QuoteDataPaymentInterface, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/selected-payment-method`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Add a specified payment method to a specified shopping cart.
//      *
//      * @tags quoteGuestPaymentMethodManagementV1
//      * @name QuoteGuestPaymentMethodManagementV1SetPut
//      * @request PUT:/V1/guest-carts/{cartId}/selected-payment-method
//      */
//     quoteGuestPaymentMethodManagementV1SetPut: (
//       cartId: string,
//       quoteGuestPaymentMethodManagementV1SetPutBody: { method: QuoteDataPaymentInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/selected-payment-method`,
//         method: "PUT",
//         body: quoteGuestPaymentMethodManagementV1SetPutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description List available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See https://devdocs.magento.com/codelinks/attributes.html#GuestPaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.
//      *
//      * @tags quoteGuestPaymentMethodManagementV1
//      * @name QuoteGuestPaymentMethodManagementV1GetListGet
//      * @request GET:/V1/guest-carts/{cartId}/payment-methods
//      */
//     quoteGuestPaymentMethodManagementV1GetListGet: (cartId: string, params: RequestParams = {}) =>
//       this.request<QuoteDataPaymentMethodInterface[], ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/payment-methods`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Returns the billing address for a specified quote.
//      *
//      * @tags quoteBillingAddressManagementV1
//      * @name QuoteBillingAddressManagementV1GetGet
//      * @request GET:/V1/carts/{cartId}/billing-address
//      */
//     quoteBillingAddressManagementV1GetGet: (cartId: number, params: RequestParams = {}) =>
//       this.request<QuoteDataAddressInterface, ErrorResponse>({
//         path: `/V1/carts/${cartId}/billing-address`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Assigns a specified billing address to a specified cart.
//      *
//      * @tags quoteBillingAddressManagementV1
//      * @name QuoteBillingAddressManagementV1AssignPost
//      * @request POST:/V1/carts/{cartId}/billing-address
//      */
//     quoteBillingAddressManagementV1AssignPost: (
//       cartId: number,
//       quoteBillingAddressManagementV1AssignPostBody: { address: QuoteDataAddressInterface; useForShipping?: boolean },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/carts/${cartId}/billing-address`,
//         method: "POST",
//         body: quoteBillingAddressManagementV1AssignPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Returns the billing address for a specified quote.
//      *
//      * @tags quoteBillingAddressManagementV1
//      * @name QuoteBillingAddressManagementV1GetGet2
//      * @request GET:/V1/carts/mine/billing-address
//      * @originalName quoteBillingAddressManagementV1GetGet
//      * @duplicate
//      */
//     quoteBillingAddressManagementV1GetGet2: (params: RequestParams = {}) =>
//       this.request<QuoteDataAddressInterface, ErrorResponse>({
//         path: `/V1/carts/mine/billing-address`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Assigns a specified billing address to a specified cart.
//      *
//      * @tags quoteBillingAddressManagementV1
//      * @name QuoteBillingAddressManagementV1AssignPost2
//      * @request POST:/V1/carts/mine/billing-address
//      * @originalName quoteBillingAddressManagementV1AssignPost
//      * @duplicate
//      */
//     quoteBillingAddressManagementV1AssignPost2: (
//       quoteBillingAddressManagementV1AssignPostBody: { address: QuoteDataAddressInterface; useForShipping?: boolean },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/carts/mine/billing-address`,
//         method: "POST",
//         body: quoteBillingAddressManagementV1AssignPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Return the billing address for a specified quote.
//      *
//      * @tags quoteGuestBillingAddressManagementV1
//      * @name QuoteGuestBillingAddressManagementV1GetGet
//      * @request GET:/V1/guest-carts/{cartId}/billing-address
//      */
//     quoteGuestBillingAddressManagementV1GetGet: (cartId: string, params: RequestParams = {}) =>
//       this.request<QuoteDataAddressInterface, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/billing-address`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Assign a specified billing address to a specified cart.
//      *
//      * @tags quoteGuestBillingAddressManagementV1
//      * @name QuoteGuestBillingAddressManagementV1AssignPost
//      * @request POST:/V1/guest-carts/{cartId}/billing-address
//      */
//     quoteGuestBillingAddressManagementV1AssignPost: (
//       cartId: string,
//       quoteGuestBillingAddressManagementV1AssignPostBody: {
//         address: QuoteDataAddressInterface;
//         useForShipping?: boolean;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/billing-address`,
//         method: "POST",
//         body: quoteGuestBillingAddressManagementV1AssignPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Returns information for a coupon in a specified cart.
//      *
//      * @tags quoteCouponManagementV1
//      * @name QuoteCouponManagementV1GetGet
//      * @request GET:/V1/carts/{cartId}/coupons
//      */
//     quoteCouponManagementV1GetGet: (cartId: number, params: RequestParams = {}) =>
//       this.request<string, ErrorResponse>({
//         path: `/V1/carts/${cartId}/coupons`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Deletes a coupon from a specified cart.
//      *
//      * @tags quoteCouponManagementV1
//      * @name QuoteCouponManagementV1RemoveDelete
//      * @request DELETE:/V1/carts/{cartId}/coupons
//      */
//     quoteCouponManagementV1RemoveDelete: (cartId: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/carts/${cartId}/coupons`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Adds a coupon by code to a specified cart.
//      *
//      * @tags quoteCouponManagementV1
//      * @name QuoteCouponManagementV1SetPut
//      * @request PUT:/V1/carts/{cartId}/coupons/{couponCode}
//      */
//     quoteCouponManagementV1SetPut: (cartId: number, couponCode: string, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/carts/${cartId}/coupons/${couponCode}`,
//         method: "PUT",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Returns information for a coupon in a specified cart.
//      *
//      * @tags quoteCouponManagementV1
//      * @name QuoteCouponManagementV1GetGet2
//      * @request GET:/V1/carts/mine/coupons
//      * @originalName quoteCouponManagementV1GetGet
//      * @duplicate
//      */
//     quoteCouponManagementV1GetGet2: (params: RequestParams = {}) =>
//       this.request<string, ErrorResponse>({
//         path: `/V1/carts/mine/coupons`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Deletes a coupon from a specified cart.
//      *
//      * @tags quoteCouponManagementV1
//      * @name QuoteCouponManagementV1RemoveDelete2
//      * @request DELETE:/V1/carts/mine/coupons
//      * @originalName quoteCouponManagementV1RemoveDelete
//      * @duplicate
//      */
//     quoteCouponManagementV1RemoveDelete2: (params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/carts/mine/coupons`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Adds a coupon by code to a specified cart.
//      *
//      * @tags quoteCouponManagementV1
//      * @name QuoteCouponManagementV1SetPut2
//      * @request PUT:/V1/carts/mine/coupons/{couponCode}
//      * @originalName quoteCouponManagementV1SetPut
//      * @duplicate
//      */
//     quoteCouponManagementV1SetPut2: (couponCode: string, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/carts/mine/coupons/${couponCode}`,
//         method: "PUT",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Return information for a coupon in a specified cart.
//      *
//      * @tags quoteGuestCouponManagementV1
//      * @name QuoteGuestCouponManagementV1GetGet
//      * @request GET:/V1/guest-carts/{cartId}/coupons
//      */
//     quoteGuestCouponManagementV1GetGet: (cartId: string, params: RequestParams = {}) =>
//       this.request<string, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/coupons`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete a coupon from a specified cart.
//      *
//      * @tags quoteGuestCouponManagementV1
//      * @name QuoteGuestCouponManagementV1RemoveDelete
//      * @request DELETE:/V1/guest-carts/{cartId}/coupons
//      */
//     quoteGuestCouponManagementV1RemoveDelete: (cartId: string, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/coupons`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Add a coupon by code to a specified cart.
//      *
//      * @tags quoteGuestCouponManagementV1
//      * @name QuoteGuestCouponManagementV1SetPut
//      * @request PUT:/V1/guest-carts/{cartId}/coupons/{couponCode}
//      */
//     quoteGuestCouponManagementV1SetPut: (cartId: string, couponCode: string, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/coupons/${couponCode}`,
//         method: "PUT",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Returns quote totals data for a specified cart.
//      *
//      * @tags quoteCartTotalRepositoryV1
//      * @name QuoteCartTotalRepositoryV1GetGet
//      * @request GET:/V1/carts/{cartId}/totals
//      */
//     quoteCartTotalRepositoryV1GetGet: (cartId: number, params: RequestParams = {}) =>
//       this.request<QuoteDataTotalsInterface, ErrorResponse>({
//         path: `/V1/carts/${cartId}/totals`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Returns quote totals data for a specified cart.
//      *
//      * @tags quoteCartTotalRepositoryV1
//      * @name QuoteCartTotalRepositoryV1GetGet2
//      * @request GET:/V1/carts/mine/totals
//      * @originalName quoteCartTotalRepositoryV1GetGet
//      * @duplicate
//      */
//     quoteCartTotalRepositoryV1GetGet2: (params: RequestParams = {}) =>
//       this.request<QuoteDataTotalsInterface, ErrorResponse>({
//         path: `/V1/carts/mine/totals`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Set shipping/billing methods and additional data for cart and collect totals for guest.
//      *
//      * @tags quoteGuestCartTotalManagementV1
//      * @name QuoteGuestCartTotalManagementV1CollectTotalsPut
//      * @request PUT:/V1/guest-carts/{cartId}/collect-totals
//      */
//     quoteGuestCartTotalManagementV1CollectTotalsPut: (
//       cartId: string,
//       quoteGuestCartTotalManagementV1CollectTotalsPutBody: {
//         paymentMethod: QuoteDataPaymentInterface;
//         shippingCarrierCode?: string;
//         shippingMethodCode?: string;
//         additionalData?: QuoteDataTotalsAdditionalDataInterface;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<QuoteDataTotalsInterface, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/collect-totals`,
//         method: "PUT",
//         body: quoteGuestCartTotalManagementV1CollectTotalsPutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Return quote totals data for a specified cart.
//      *
//      * @tags quoteGuestCartTotalRepositoryV1
//      * @name QuoteGuestCartTotalRepositoryV1GetGet
//      * @request GET:/V1/guest-carts/{cartId}/totals
//      */
//     quoteGuestCartTotalRepositoryV1GetGet: (cartId: string, params: RequestParams = {}) =>
//       this.request<QuoteDataTotalsInterface, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/totals`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Set shipping/billing methods and additional data for cart and collect totals.
//      *
//      * @tags quoteCartTotalManagementV1
//      * @name QuoteCartTotalManagementV1CollectTotalsPut
//      * @request PUT:/V1/carts/mine/collect-totals
//      */
//     quoteCartTotalManagementV1CollectTotalsPut: (
//       quoteCartTotalManagementV1CollectTotalsPutBody: {
//         paymentMethod: QuoteDataPaymentInterface;
//         shippingCarrierCode?: string;
//         shippingMethodCode?: string;
//         additionalData?: QuoteDataTotalsAdditionalDataInterface;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<QuoteDataTotalsInterface, ErrorResponse>({
//         path: `/V1/carts/mine/collect-totals`,
//         method: "PUT",
//         body: quoteCartTotalManagementV1CollectTotalsPutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Loads a specified order.
//      *
//      * @tags salesOrderRepositoryV1
//      * @name SalesOrderRepositoryV1GetGet
//      * @request GET:/V1/orders/{id}
//      */
//     salesOrderRepositoryV1GetGet: (id: number, params: RequestParams = {}) =>
//       this.request<SalesDataOrderInterface, ErrorResponse>({
//         path: `/V1/orders/${id}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Lists orders that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#OrderRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
//      *
//      * @tags salesOrderRepositoryV1
//      * @name SalesOrderRepositoryV1GetListGet
//      * @request GET:/V1/orders
//      */
//     salesOrderRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesDataOrderSearchResultInterface, ErrorResponse>({
//         path: `/V1/orders`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Performs persist operations for a specified order.
//      *
//      * @tags salesOrderRepositoryV1
//      * @name SalesOrderRepositoryV1SavePost
//      * @request POST:/V1/orders
//      */
//     salesOrderRepositoryV1SavePost: (
//       salesOrderRepositoryV1SavePostBody: { entity: SalesDataOrderInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesDataOrderInterface, ErrorResponse>({
//         path: `/V1/orders`,
//         method: "POST",
//         body: salesOrderRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Performs persist operations for a specified order.
//      *
//      * @tags salesOrderRepositoryV1
//      * @name SalesOrderRepositoryV1SavePut
//      * @request PUT:/V1/orders/create
//      */
//     salesOrderRepositoryV1SavePut: (
//       salesOrderRepositoryV1SavePutBody: { entity: SalesDataOrderInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesDataOrderInterface, ErrorResponse>({
//         path: `/V1/orders/create`,
//         method: "PUT",
//         body: salesOrderRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Gets the status for a specified order.
//      *
//      * @tags salesOrderManagementV1
//      * @name SalesOrderManagementV1GetStatusGet
//      * @request GET:/V1/orders/{id}/statuses
//      */
//     salesOrderManagementV1GetStatusGet: (id: number, params: RequestParams = {}) =>
//       this.request<string, ErrorResponse>({
//         path: `/V1/orders/${id}/statuses`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Cancels a specified order.
//      *
//      * @tags salesOrderManagementV1
//      * @name SalesOrderManagementV1CancelPost
//      * @request POST:/V1/orders/{id}/cancel
//      */
//     salesOrderManagementV1CancelPost: (id: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/orders/${id}/cancel`,
//         method: "POST",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Emails a user a specified order.
//      *
//      * @tags salesOrderManagementV1
//      * @name SalesOrderManagementV1NotifyPost
//      * @request POST:/V1/orders/{id}/emails
//      */
//     salesOrderManagementV1NotifyPost: (id: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/orders/${id}/emails`,
//         method: "POST",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Holds a specified order.
//      *
//      * @tags salesOrderManagementV1
//      * @name SalesOrderManagementV1HoldPost
//      * @request POST:/V1/orders/{id}/hold
//      */
//     salesOrderManagementV1HoldPost: (id: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/orders/${id}/hold`,
//         method: "POST",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Releases a specified order from hold status.
//      *
//      * @tags salesOrderManagementV1
//      * @name SalesOrderManagementV1UnHoldPost
//      * @request POST:/V1/orders/{id}/unhold
//      */
//     salesOrderManagementV1UnHoldPost: (id: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/orders/${id}/unhold`,
//         method: "POST",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Adds a comment to a specified order.
//      *
//      * @tags salesOrderManagementV1
//      * @name SalesOrderManagementV1AddCommentPost
//      * @request POST:/V1/orders/{id}/comments
//      */
//     salesOrderManagementV1AddCommentPost: (
//       id: number,
//       salesOrderManagementV1AddCommentPostBody: { statusHistory: SalesDataOrderStatusHistoryInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/orders/${id}/comments`,
//         method: "POST",
//         body: salesOrderManagementV1AddCommentPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Lists comments for a specified order.
//      *
//      * @tags salesOrderManagementV1
//      * @name SalesOrderManagementV1GetCommentsListGet
//      * @request GET:/V1/orders/{id}/comments
//      */
//     salesOrderManagementV1GetCommentsListGet: (id: number, params: RequestParams = {}) =>
//       this.request<SalesDataOrderStatusHistorySearchResultInterface, ErrorResponse>({
//         path: `/V1/orders/${id}/comments`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Performs persist operations for a specified order address.
//      *
//      * @tags salesOrderAddressRepositoryV1
//      * @name SalesOrderAddressRepositoryV1SavePut
//      * @request PUT:/V1/orders/{parent_id}
//      */
//     salesOrderAddressRepositoryV1SavePut: (
//       parentId: string,
//       salesOrderAddressRepositoryV1SavePutBody: { entity: SalesDataOrderAddressInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesDataOrderAddressInterface, ErrorResponse>({
//         path: `/V1/orders/${parentId}`,
//         method: "PUT",
//         body: salesOrderAddressRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Loads a specified order item.
//      *
//      * @tags salesOrderItemRepositoryV1
//      * @name SalesOrderItemRepositoryV1GetGet
//      * @request GET:/V1/orders/items/{id}
//      */
//     salesOrderItemRepositoryV1GetGet: (id: number, params: RequestParams = {}) =>
//       this.request<SalesDataOrderItemInterface, ErrorResponse>({
//         path: `/V1/orders/items/${id}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Lists order items that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#OrderItemRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
//      *
//      * @tags salesOrderItemRepositoryV1
//      * @name SalesOrderItemRepositoryV1GetListGet
//      * @request GET:/V1/orders/items
//      */
//     salesOrderItemRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesDataOrderItemSearchResultInterface, ErrorResponse>({
//         path: `/V1/orders/items`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Loads a specified invoice.
//      *
//      * @tags salesInvoiceRepositoryV1
//      * @name SalesInvoiceRepositoryV1GetGet
//      * @request GET:/V1/invoices/{id}
//      */
//     salesInvoiceRepositoryV1GetGet: (id: number, params: RequestParams = {}) =>
//       this.request<SalesDataInvoiceInterface, ErrorResponse>({
//         path: `/V1/invoices/${id}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Lists invoices that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#InvoiceRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
//      *
//      * @tags salesInvoiceRepositoryV1
//      * @name SalesInvoiceRepositoryV1GetListGet
//      * @request GET:/V1/invoices
//      */
//     salesInvoiceRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesDataInvoiceSearchResultInterface, ErrorResponse>({
//         path: `/V1/invoices`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Performs persist operations for a specified invoice.
//      *
//      * @tags salesInvoiceRepositoryV1
//      * @name SalesInvoiceRepositoryV1SavePost
//      * @request POST:/V1/invoices/
//      */
//     salesInvoiceRepositoryV1SavePost: (
//       salesInvoiceRepositoryV1SavePostBody: { entity: SalesDataInvoiceInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesDataInvoiceInterface, ErrorResponse>({
//         path: `/V1/invoices/`,
//         method: "POST",
//         body: salesInvoiceRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Lists comments for a specified invoice.
//      *
//      * @tags salesInvoiceManagementV1
//      * @name SalesInvoiceManagementV1GetCommentsListGet
//      * @request GET:/V1/invoices/{id}/comments
//      */
//     salesInvoiceManagementV1GetCommentsListGet: (id: number, params: RequestParams = {}) =>
//       this.request<SalesDataInvoiceCommentSearchResultInterface, ErrorResponse>({
//         path: `/V1/invoices/${id}/comments`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Emails a user a specified invoice.
//      *
//      * @tags salesInvoiceManagementV1
//      * @name SalesInvoiceManagementV1NotifyPost
//      * @request POST:/V1/invoices/{id}/emails
//      */
//     salesInvoiceManagementV1NotifyPost: (id: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/invoices/${id}/emails`,
//         method: "POST",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Voids a specified invoice.
//      *
//      * @tags salesInvoiceManagementV1
//      * @name SalesInvoiceManagementV1SetVoidPost
//      * @request POST:/V1/invoices/{id}/void
//      */
//     salesInvoiceManagementV1SetVoidPost: (id: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/invoices/${id}/void`,
//         method: "POST",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Sets invoice capture.
//      *
//      * @tags salesInvoiceManagementV1
//      * @name SalesInvoiceManagementV1SetCapturePost
//      * @request POST:/V1/invoices/{id}/capture
//      */
//     salesInvoiceManagementV1SetCapturePost: (id: number, params: RequestParams = {}) =>
//       this.request<string, ErrorResponse>({
//         path: `/V1/invoices/${id}/capture`,
//         method: "POST",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Performs persist operations for a specified invoice comment.
//      *
//      * @tags salesInvoiceCommentRepositoryV1
//      * @name SalesInvoiceCommentRepositoryV1SavePost
//      * @request POST:/V1/invoices/comments
//      */
//     salesInvoiceCommentRepositoryV1SavePost: (
//       salesInvoiceCommentRepositoryV1SavePostBody: { entity: SalesDataInvoiceCommentInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesDataInvoiceCommentInterface, ErrorResponse>({
//         path: `/V1/invoices/comments`,
//         method: "POST",
//         body: salesInvoiceCommentRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Create refund for invoice
//      *
//      * @tags salesRefundInvoiceV1
//      * @name SalesRefundInvoiceV1ExecutePost
//      * @request POST:/V1/invoice/{invoiceId}/refund
//      */
//     salesRefundInvoiceV1ExecutePost: (
//       invoiceId: number,
//       salesRefundInvoiceV1ExecutePostBody: {
//         items?: SalesDataCreditmemoItemCreationInterface[];
//         isOnline?: boolean;
//         notify?: boolean;
//         appendComment?: boolean;
//         comment?: SalesDataCreditmemoCommentCreationInterface;
//         arguments?: SalesDataCreditmemoCreationArgumentsInterface;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/invoice/${invoiceId}/refund`,
//         method: "POST",
//         body: salesRefundInvoiceV1ExecutePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Lists comments for a specified credit memo.
//      *
//      * @tags salesCreditmemoManagementV1
//      * @name SalesCreditmemoManagementV1GetCommentsListGet
//      * @request GET:/V1/creditmemo/{id}/comments
//      */
//     salesCreditmemoManagementV1GetCommentsListGet: (id: number, params: RequestParams = {}) =>
//       this.request<SalesDataCreditmemoCommentSearchResultInterface, ErrorResponse>({
//         path: `/V1/creditmemo/${id}/comments`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Performs persist operations for a specified entity.
//      *
//      * @tags salesCreditmemoCommentRepositoryV1
//      * @name SalesCreditmemoCommentRepositoryV1SavePost
//      * @request POST:/V1/creditmemo/{id}/comments
//      */
//     salesCreditmemoCommentRepositoryV1SavePost: (
//       id: string,
//       salesCreditmemoCommentRepositoryV1SavePostBody: { entity: SalesDataCreditmemoCommentInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesDataCreditmemoCommentInterface, ErrorResponse>({
//         path: `/V1/creditmemo/${id}/comments`,
//         method: "POST",
//         body: salesCreditmemoCommentRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Cancels a specified credit memo.
//      *
//      * @tags salesCreditmemoManagementV1
//      * @name SalesCreditmemoManagementV1CancelPut
//      * @request PUT:/V1/creditmemo/{id}
//      */
//     salesCreditmemoManagementV1CancelPut: (id: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/creditmemo/${id}`,
//         method: "PUT",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Loads a specified credit memo.
//      *
//      * @tags salesCreditmemoRepositoryV1
//      * @name SalesCreditmemoRepositoryV1GetGet
//      * @request GET:/V1/creditmemo/{id}
//      */
//     salesCreditmemoRepositoryV1GetGet: (id: number, params: RequestParams = {}) =>
//       this.request<SalesDataCreditmemoInterface, ErrorResponse>({
//         path: `/V1/creditmemo/${id}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Emails a user a specified credit memo.
//      *
//      * @tags salesCreditmemoManagementV1
//      * @name SalesCreditmemoManagementV1NotifyPost
//      * @request POST:/V1/creditmemo/{id}/emails
//      */
//     salesCreditmemoManagementV1NotifyPost: (id: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/creditmemo/${id}/emails`,
//         method: "POST",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Prepare creditmemo to refund and save it.
//      *
//      * @tags salesCreditmemoManagementV1
//      * @name SalesCreditmemoManagementV1RefundPost
//      * @request POST:/V1/creditmemo/refund
//      */
//     salesCreditmemoManagementV1RefundPost: (
//       salesCreditmemoManagementV1RefundPostBody: {
//         creditmemo: SalesDataCreditmemoInterface;
//         offlineRequested?: boolean;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesDataCreditmemoInterface, ErrorResponse>({
//         path: `/V1/creditmemo/refund`,
//         method: "POST",
//         body: salesCreditmemoManagementV1RefundPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Lists credit memos that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#CreditmemoRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
//      *
//      * @tags salesCreditmemoRepositoryV1
//      * @name SalesCreditmemoRepositoryV1GetListGet
//      * @request GET:/V1/creditmemos
//      */
//     salesCreditmemoRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesDataCreditmemoSearchResultInterface, ErrorResponse>({
//         path: `/V1/creditmemos`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Performs persist operations for a specified credit memo.
//      *
//      * @tags salesCreditmemoRepositoryV1
//      * @name SalesCreditmemoRepositoryV1SavePost
//      * @request POST:/V1/creditmemo
//      */
//     salesCreditmemoRepositoryV1SavePost: (
//       salesCreditmemoRepositoryV1SavePostBody: { entity: SalesDataCreditmemoInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesDataCreditmemoInterface, ErrorResponse>({
//         path: `/V1/creditmemo`,
//         method: "POST",
//         body: salesCreditmemoRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Create offline refund for order
//      *
//      * @tags salesRefundOrderV1
//      * @name SalesRefundOrderV1ExecutePost
//      * @request POST:/V1/order/{orderId}/refund
//      */
//     salesRefundOrderV1ExecutePost: (
//       orderId: number,
//       salesRefundOrderV1ExecutePostBody: {
//         items?: SalesDataCreditmemoItemCreationInterface[];
//         notify?: boolean;
//         appendComment?: boolean;
//         comment?: SalesDataCreditmemoCommentCreationInterface;
//         arguments?: SalesDataCreditmemoCreationArgumentsInterface;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/order/${orderId}/refund`,
//         method: "POST",
//         body: salesRefundOrderV1ExecutePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Loads a specified shipment.
//      *
//      * @tags salesShipmentRepositoryV1
//      * @name SalesShipmentRepositoryV1GetGet
//      * @request GET:/V1/shipment/{id}
//      */
//     salesShipmentRepositoryV1GetGet: (id: number, params: RequestParams = {}) =>
//       this.request<SalesDataShipmentInterface, ErrorResponse>({
//         path: `/V1/shipment/${id}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Lists shipments that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#ShipmentRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
//      *
//      * @tags salesShipmentRepositoryV1
//      * @name SalesShipmentRepositoryV1GetListGet
//      * @request GET:/V1/shipments
//      */
//     salesShipmentRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesDataShipmentSearchResultInterface, ErrorResponse>({
//         path: `/V1/shipments`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Performs persist operations for a specified shipment.
//      *
//      * @tags salesShipmentRepositoryV1
//      * @name SalesShipmentRepositoryV1SavePost
//      * @request POST:/V1/shipment/
//      */
//     salesShipmentRepositoryV1SavePost: (
//       salesShipmentRepositoryV1SavePostBody: { entity: SalesDataShipmentInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesDataShipmentInterface, ErrorResponse>({
//         path: `/V1/shipment/`,
//         method: "POST",
//         body: salesShipmentRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Lists comments for a specified shipment.
//      *
//      * @tags salesShipmentManagementV1
//      * @name SalesShipmentManagementV1GetCommentsListGet
//      * @request GET:/V1/shipment/{id}/comments
//      */
//     salesShipmentManagementV1GetCommentsListGet: (id: number, params: RequestParams = {}) =>
//       this.request<SalesDataShipmentCommentSearchResultInterface, ErrorResponse>({
//         path: `/V1/shipment/${id}/comments`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Performs persist operations for a specified shipment comment.
//      *
//      * @tags salesShipmentCommentRepositoryV1
//      * @name SalesShipmentCommentRepositoryV1SavePost
//      * @request POST:/V1/shipment/{id}/comments
//      */
//     salesShipmentCommentRepositoryV1SavePost: (
//       id: string,
//       salesShipmentCommentRepositoryV1SavePostBody: { entity: SalesDataShipmentCommentInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesDataShipmentCommentInterface, ErrorResponse>({
//         path: `/V1/shipment/${id}/comments`,
//         method: "POST",
//         body: salesShipmentCommentRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Emails user a specified shipment.
//      *
//      * @tags salesShipmentManagementV1
//      * @name SalesShipmentManagementV1NotifyPost
//      * @request POST:/V1/shipment/{id}/emails
//      */
//     salesShipmentManagementV1NotifyPost: (id: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/shipment/${id}/emails`,
//         method: "POST",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Gets a specified shipment label.
//      *
//      * @tags salesShipmentManagementV1
//      * @name SalesShipmentManagementV1GetLabelGet
//      * @request GET:/V1/shipment/{id}/label
//      */
//     salesShipmentManagementV1GetLabelGet: (id: number, params: RequestParams = {}) =>
//       this.request<string, ErrorResponse>({
//         path: `/V1/shipment/${id}/label`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Performs persist operations for a specified shipment track.
//      *
//      * @tags salesShipmentTrackRepositoryV1
//      * @name SalesShipmentTrackRepositoryV1SavePost
//      * @request POST:/V1/shipment/track
//      */
//     salesShipmentTrackRepositoryV1SavePost: (
//       salesShipmentTrackRepositoryV1SavePostBody: { entity: SalesDataShipmentTrackInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesDataShipmentTrackInterface, ErrorResponse>({
//         path: `/V1/shipment/track`,
//         method: "POST",
//         body: salesShipmentTrackRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Deletes a specified shipment track by ID.
//      *
//      * @tags salesShipmentTrackRepositoryV1
//      * @name SalesShipmentTrackRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/shipment/track/{id}
//      */
//     salesShipmentTrackRepositoryV1DeleteByIdDelete: (id: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/shipment/track/${id}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Creates new Shipment for given Order.
//      *
//      * @tags salesShipOrderV1
//      * @name SalesShipOrderV1ExecutePost
//      * @request POST:/V1/order/{orderId}/ship
//      */
//     salesShipOrderV1ExecutePost: (
//       orderId: number,
//       salesShipOrderV1ExecutePostBody: {
//         items?: SalesDataShipmentItemCreationInterface[];
//         notify?: boolean;
//         appendComment?: boolean;
//         comment?: SalesDataShipmentCommentCreationInterface;
//         tracks?: SalesDataShipmentTrackCreationInterface[];
//         packages?: SalesDataShipmentPackageCreationInterface[];
//         arguments?: SalesDataShipmentCreationArgumentsInterface;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/order/${orderId}/ship`,
//         method: "POST",
//         body: salesShipOrderV1ExecutePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Loads a specified transaction.
//      *
//      * @tags salesTransactionRepositoryV1
//      * @name SalesTransactionRepositoryV1GetGet
//      * @request GET:/V1/transactions/{id}
//      */
//     salesTransactionRepositoryV1GetGet: (id: number, params: RequestParams = {}) =>
//       this.request<SalesDataTransactionInterface, ErrorResponse>({
//         path: `/V1/transactions/${id}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Lists transactions that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#TransactionRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
//      *
//      * @tags salesTransactionRepositoryV1
//      * @name SalesTransactionRepositoryV1GetListGet
//      * @request GET:/V1/transactions
//      */
//     salesTransactionRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesDataTransactionSearchResultInterface, ErrorResponse>({
//         path: `/V1/transactions`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags salesInvoiceOrderV1
//      * @name SalesInvoiceOrderV1ExecutePost
//      * @request POST:/V1/order/{orderId}/invoice
//      */
//     salesInvoiceOrderV1ExecutePost: (
//       orderId: number,
//       salesInvoiceOrderV1ExecutePostBody: {
//         capture?: boolean;
//         items?: SalesDataInvoiceItemCreationInterface[];
//         notify?: boolean;
//         appendComment?: boolean;
//         comment?: SalesDataInvoiceCommentCreationInterface;
//         arguments?: SalesDataInvoiceCreationArgumentsInterface;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/order/${orderId}/invoice`,
//         method: "POST",
//         body: salesInvoiceOrderV1ExecutePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags checkoutGuestShippingInformationManagementV1
//      * @name CheckoutGuestShippingInformationManagementV1SaveAddressInformationPost
//      * @request POST:/V1/guest-carts/{cartId}/shipping-information
//      */
//     checkoutGuestShippingInformationManagementV1SaveAddressInformationPost: (
//       cartId: string,
//       checkoutGuestShippingInformationManagementV1SaveAddressInformationPostBody: {
//         addressInformation: CheckoutDataShippingInformationInterface;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<CheckoutDataPaymentDetailsInterface, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/shipping-information`,
//         method: "POST",
//         body: checkoutGuestShippingInformationManagementV1SaveAddressInformationPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags checkoutShippingInformationManagementV1
//      * @name CheckoutShippingInformationManagementV1SaveAddressInformationPost
//      * @request POST:/V1/carts/mine/shipping-information
//      */
//     checkoutShippingInformationManagementV1SaveAddressInformationPost: (
//       checkoutShippingInformationManagementV1SaveAddressInformationPostBody: {
//         addressInformation: CheckoutDataShippingInformationInterface;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<CheckoutDataPaymentDetailsInterface, ErrorResponse>({
//         path: `/V1/carts/mine/shipping-information`,
//         method: "POST",
//         body: checkoutShippingInformationManagementV1SaveAddressInformationPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags checkoutShippingInformationManagementV1
//      * @name CheckoutShippingInformationManagementV1SaveAddressInformationPost2
//      * @request POST:/V1/carts/{cartId}/shipping-information
//      * @originalName checkoutShippingInformationManagementV1SaveAddressInformationPost
//      * @duplicate
//      */
//     checkoutShippingInformationManagementV1SaveAddressInformationPost2: (
//       cartId: number,
//       checkoutShippingInformationManagementV1SaveAddressInformationPostBody: {
//         addressInformation: CheckoutDataShippingInformationInterface;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<CheckoutDataPaymentDetailsInterface, ErrorResponse>({
//         path: `/V1/carts/${cartId}/shipping-information`,
//         method: "POST",
//         body: checkoutShippingInformationManagementV1SaveAddressInformationPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Calculate quote totals based on address and shipping method.
//      *
//      * @tags checkoutTotalsInformationManagementV1
//      * @name CheckoutTotalsInformationManagementV1CalculatePost
//      * @request POST:/V1/carts/{cartId}/totals-information
//      */
//     checkoutTotalsInformationManagementV1CalculatePost: (
//       cartId: number,
//       checkoutTotalsInformationManagementV1CalculatePostBody: {
//         addressInformation: CheckoutDataTotalsInformationInterface;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<QuoteDataTotalsInterface, ErrorResponse>({
//         path: `/V1/carts/${cartId}/totals-information`,
//         method: "POST",
//         body: checkoutTotalsInformationManagementV1CalculatePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Calculate quote totals based on address and shipping method.
//      *
//      * @tags checkoutTotalsInformationManagementV1
//      * @name CheckoutTotalsInformationManagementV1CalculatePost2
//      * @request POST:/V1/carts/mine/totals-information
//      * @originalName checkoutTotalsInformationManagementV1CalculatePost
//      * @duplicate
//      */
//     checkoutTotalsInformationManagementV1CalculatePost2: (
//       checkoutTotalsInformationManagementV1CalculatePostBody: {
//         addressInformation: CheckoutDataTotalsInformationInterface;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<QuoteDataTotalsInterface, ErrorResponse>({
//         path: `/V1/carts/mine/totals-information`,
//         method: "POST",
//         body: checkoutTotalsInformationManagementV1CalculatePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Calculate quote totals based on address and shipping method.
//      *
//      * @tags checkoutGuestTotalsInformationManagementV1
//      * @name CheckoutGuestTotalsInformationManagementV1CalculatePost
//      * @request POST:/V1/guest-carts/{cartId}/totals-information
//      */
//     checkoutGuestTotalsInformationManagementV1CalculatePost: (
//       cartId: string,
//       checkoutGuestTotalsInformationManagementV1CalculatePostBody: {
//         addressInformation: CheckoutDataTotalsInformationInterface;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<QuoteDataTotalsInterface, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/totals-information`,
//         method: "POST",
//         body: checkoutGuestTotalsInformationManagementV1CalculatePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Set payment information and place order for a specified cart.
//      *
//      * @tags checkoutGuestPaymentInformationManagementV1
//      * @name CheckoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost
//      * @request POST:/V1/guest-carts/{cartId}/payment-information
//      */
//     checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost: (
//       cartId: string,
//       checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPostBody: {
//         email: string;
//         paymentMethod: QuoteDataPaymentInterface;
//         billingAddress?: QuoteDataAddressInterface;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/payment-information`,
//         method: "POST",
//         body: checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get payment information
//      *
//      * @tags checkoutGuestPaymentInformationManagementV1
//      * @name CheckoutGuestPaymentInformationManagementV1GetPaymentInformationGet
//      * @request GET:/V1/guest-carts/{cartId}/payment-information
//      */
//     checkoutGuestPaymentInformationManagementV1GetPaymentInformationGet: (cartId: string, params: RequestParams = {}) =>
//       this.request<CheckoutDataPaymentDetailsInterface, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/payment-information`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Set payment information for a specified cart.
//      *
//      * @tags checkoutGuestPaymentInformationManagementV1
//      * @name CheckoutGuestPaymentInformationManagementV1SavePaymentInformationPost
//      * @request POST:/V1/guest-carts/{cartId}/set-payment-information
//      */
//     checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost: (
//       cartId: string,
//       checkoutGuestPaymentInformationManagementV1SavePaymentInformationPostBody: {
//         email: string;
//         paymentMethod: QuoteDataPaymentInterface;
//         billingAddress?: QuoteDataAddressInterface;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/set-payment-information`,
//         method: "POST",
//         body: checkoutGuestPaymentInformationManagementV1SavePaymentInformationPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Set payment information and place order for a specified cart.
//      *
//      * @tags checkoutPaymentInformationManagementV1
//      * @name CheckoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost
//      * @request POST:/V1/carts/mine/payment-information
//      */
//     checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost: (
//       checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPostBody: {
//         paymentMethod: QuoteDataPaymentInterface;
//         billingAddress?: QuoteDataAddressInterface;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/carts/mine/payment-information`,
//         method: "POST",
//         body: checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get payment information
//      *
//      * @tags checkoutPaymentInformationManagementV1
//      * @name CheckoutPaymentInformationManagementV1GetPaymentInformationGet
//      * @request GET:/V1/carts/mine/payment-information
//      */
//     checkoutPaymentInformationManagementV1GetPaymentInformationGet: (params: RequestParams = {}) =>
//       this.request<CheckoutDataPaymentDetailsInterface, ErrorResponse>({
//         path: `/V1/carts/mine/payment-information`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Set payment information for a specified cart.
//      *
//      * @tags checkoutPaymentInformationManagementV1
//      * @name CheckoutPaymentInformationManagementV1SavePaymentInformationPost
//      * @request POST:/V1/carts/mine/set-payment-information
//      */
//     checkoutPaymentInformationManagementV1SavePaymentInformationPost: (
//       checkoutPaymentInformationManagementV1SavePaymentInformationPostBody: {
//         paymentMethod: QuoteDataPaymentInterface;
//         billingAddress?: QuoteDataAddressInterface;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/carts/mine/set-payment-information`,
//         method: "POST",
//         body: checkoutPaymentInformationManagementV1SavePaymentInformationPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Add child product to specified Bundle option by product sku
//      *
//      * @tags bundleProductLinkManagementV1
//      * @name BundleProductLinkManagementV1AddChildByProductSkuPost
//      * @request POST:/V1/bundle-products/{sku}/links/{optionId}
//      */
//     bundleProductLinkManagementV1AddChildByProductSkuPost: (
//       sku: string,
//       optionId: number,
//       bundleProductLinkManagementV1AddChildByProductSkuPostBody: { linkedProduct: BundleDataLinkInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/bundle-products/${sku}/links/${optionId}`,
//         method: "POST",
//         body: bundleProductLinkManagementV1AddChildByProductSkuPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags bundleProductLinkManagementV1
//      * @name BundleProductLinkManagementV1SaveChildPut
//      * @request PUT:/V1/bundle-products/{sku}/links/{id}
//      */
//     bundleProductLinkManagementV1SaveChildPut: (
//       sku: string,
//       id: string,
//       bundleProductLinkManagementV1SaveChildPutBody: { linkedProduct: BundleDataLinkInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/bundle-products/${sku}/links/${id}`,
//         method: "PUT",
//         body: bundleProductLinkManagementV1SaveChildPutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get all children for Bundle product
//      *
//      * @tags bundleProductLinkManagementV1
//      * @name BundleProductLinkManagementV1GetChildrenGet
//      * @request GET:/V1/bundle-products/{productSku}/children
//      */
//     bundleProductLinkManagementV1GetChildrenGet: (
//       productSku: string,
//       query?: { optionId?: number },
//       params: RequestParams = {},
//     ) =>
//       this.request<BundleDataLinkInterface[], ErrorResponse>({
//         path: `/V1/bundle-products/${productSku}/children`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Remove product from Bundle product option
//      *
//      * @tags bundleProductLinkManagementV1
//      * @name BundleProductLinkManagementV1RemoveChildDelete
//      * @request DELETE:/V1/bundle-products/{sku}/options/{optionId}/children/{childSku}
//      */
//     bundleProductLinkManagementV1RemoveChildDelete: (
//       sku: string,
//       optionId: number,
//       childSku: string,
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/bundle-products/${sku}/options/${optionId}/children/${childSku}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get all options for bundle product
//      *
//      * @tags bundleProductOptionRepositoryV1
//      * @name BundleProductOptionRepositoryV1GetListGet
//      * @request GET:/V1/bundle-products/{sku}/options/all
//      */
//     bundleProductOptionRepositoryV1GetListGet: (sku: string, params: RequestParams = {}) =>
//       this.request<BundleDataOptionInterface[], ErrorResponse>({
//         path: `/V1/bundle-products/${sku}/options/all`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get option for bundle product
//      *
//      * @tags bundleProductOptionRepositoryV1
//      * @name BundleProductOptionRepositoryV1GetGet
//      * @request GET:/V1/bundle-products/{sku}/options/{optionId}
//      */
//     bundleProductOptionRepositoryV1GetGet: (sku: string, optionId: number, params: RequestParams = {}) =>
//       this.request<BundleDataOptionInterface, ErrorResponse>({
//         path: `/V1/bundle-products/${sku}/options/${optionId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Remove bundle option
//      *
//      * @tags bundleProductOptionRepositoryV1
//      * @name BundleProductOptionRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/bundle-products/{sku}/options/{optionId}
//      */
//     bundleProductOptionRepositoryV1DeleteByIdDelete: (sku: string, optionId: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/bundle-products/${sku}/options/${optionId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get all types for options for bundle products
//      *
//      * @tags bundleProductOptionTypeListV1
//      * @name BundleProductOptionTypeListV1GetItemsGet
//      * @request GET:/V1/bundle-products/options/types
//      */
//     bundleProductOptionTypeListV1GetItemsGet: (params: RequestParams = {}) =>
//       this.request<BundleDataOptionTypeInterface[], ErrorResponse>({
//         path: `/V1/bundle-products/options/types`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Add new option for bundle product
//      *
//      * @tags bundleProductOptionManagementV1
//      * @name BundleProductOptionManagementV1SavePost
//      * @request POST:/V1/bundle-products/options/add
//      */
//     bundleProductOptionManagementV1SavePost: (
//       bundleProductOptionManagementV1SavePostBody: { option: BundleDataOptionInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/bundle-products/options/add`,
//         method: "POST",
//         body: bundleProductOptionManagementV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Add new option for bundle product
//      *
//      * @tags bundleProductOptionManagementV1
//      * @name BundleProductOptionManagementV1SavePut
//      * @request PUT:/V1/bundle-products/options/{optionId}
//      */
//     bundleProductOptionManagementV1SavePut: (
//       optionId: string,
//       bundleProductOptionManagementV1SavePutBody: { option: BundleDataOptionInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/bundle-products/options/${optionId}`,
//         method: "PUT",
//         body: bundleProductOptionManagementV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Create access token for admin given the admin credentials.
//      *
//      * @tags integrationAdminTokenServiceV1
//      * @name IntegrationAdminTokenServiceV1CreateAdminAccessTokenPost
//      * @request POST:/V1/integration/admin/token
//      */
//     integrationAdminTokenServiceV1CreateAdminAccessTokenPost: (
//       integrationAdminTokenServiceV1CreateAdminAccessTokenPostBody: { username: string; password: string },
//       params: RequestParams = {},
//     ) =>
//       this.request<string, ErrorResponse>({
//         path: `/V1/integration/admin/token`,
//         method: "POST",
//         body: integrationAdminTokenServiceV1CreateAdminAccessTokenPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Create access token for admin given the customer credentials.
//      *
//      * @tags integrationCustomerTokenServiceV1
//      * @name IntegrationCustomerTokenServiceV1CreateCustomerAccessTokenPost
//      * @request POST:/V1/integration/customer/token
//      */
//     integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost: (
//       integrationCustomerTokenServiceV1CreateCustomerAccessTokenPostBody: { username: string; password: string },
//       params: RequestParams = {},
//     ) =>
//       this.request<string, ErrorResponse>({
//         path: `/V1/integration/customer/token`,
//         method: "POST",
//         body: integrationCustomerTokenServiceV1CreateCustomerAccessTokenPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description List of links with associated samples
//      *
//      * @tags downloadableLinkRepositoryV1
//      * @name DownloadableLinkRepositoryV1GetListGet
//      * @request GET:/V1/products/{sku}/downloadable-links
//      */
//     downloadableLinkRepositoryV1GetListGet: (sku: string, params: RequestParams = {}) =>
//       this.request<DownloadableDataLinkInterface[], ErrorResponse>({
//         path: `/V1/products/${sku}/downloadable-links`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Update downloadable link of the given product (link type and its resources cannot be changed)
//      *
//      * @tags downloadableLinkRepositoryV1
//      * @name DownloadableLinkRepositoryV1SavePost
//      * @request POST:/V1/products/{sku}/downloadable-links
//      */
//     downloadableLinkRepositoryV1SavePost: (
//       sku: string,
//       downloadableLinkRepositoryV1SavePostBody: { link: DownloadableDataLinkInterface; isGlobalScopeContent?: boolean },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/products/${sku}/downloadable-links`,
//         method: "POST",
//         body: downloadableLinkRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Update downloadable link of the given product (link type and its resources cannot be changed)
//      *
//      * @tags downloadableLinkRepositoryV1
//      * @name DownloadableLinkRepositoryV1SavePut
//      * @request PUT:/V1/products/{sku}/downloadable-links/{id}
//      */
//     downloadableLinkRepositoryV1SavePut: (
//       sku: string,
//       id: string,
//       downloadableLinkRepositoryV1SavePutBody: { link: DownloadableDataLinkInterface; isGlobalScopeContent?: boolean },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/products/${sku}/downloadable-links/${id}`,
//         method: "PUT",
//         body: downloadableLinkRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete downloadable link
//      *
//      * @tags downloadableLinkRepositoryV1
//      * @name DownloadableLinkRepositoryV1DeleteDelete
//      * @request DELETE:/V1/products/downloadable-links/{id}
//      */
//     downloadableLinkRepositoryV1DeleteDelete: (id: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/products/downloadable-links/${id}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description List of samples for downloadable product
//      *
//      * @tags downloadableSampleRepositoryV1
//      * @name DownloadableSampleRepositoryV1GetListGet
//      * @request GET:/V1/products/{sku}/downloadable-links/samples
//      */
//     downloadableSampleRepositoryV1GetListGet: (sku: string, params: RequestParams = {}) =>
//       this.request<DownloadableDataSampleInterface[], ErrorResponse>({
//         path: `/V1/products/${sku}/downloadable-links/samples`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Update downloadable sample of the given product
//      *
//      * @tags downloadableSampleRepositoryV1
//      * @name DownloadableSampleRepositoryV1SavePost
//      * @request POST:/V1/products/{sku}/downloadable-links/samples
//      */
//     downloadableSampleRepositoryV1SavePost: (
//       sku: string,
//       downloadableSampleRepositoryV1SavePostBody: {
//         sample: DownloadableDataSampleInterface;
//         isGlobalScopeContent?: boolean;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/products/${sku}/downloadable-links/samples`,
//         method: "POST",
//         body: downloadableSampleRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Update downloadable sample of the given product
//      *
//      * @tags downloadableSampleRepositoryV1
//      * @name DownloadableSampleRepositoryV1SavePut
//      * @request PUT:/V1/products/{sku}/downloadable-links/samples/{id}
//      */
//     downloadableSampleRepositoryV1SavePut: (
//       sku: string,
//       id: string,
//       downloadableSampleRepositoryV1SavePutBody: {
//         sample: DownloadableDataSampleInterface;
//         isGlobalScopeContent?: boolean;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/products/${sku}/downloadable-links/samples/${id}`,
//         method: "PUT",
//         body: downloadableSampleRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete downloadable sample
//      *
//      * @tags downloadableSampleRepositoryV1
//      * @name DownloadableSampleRepositoryV1DeleteDelete
//      * @request DELETE:/V1/products/downloadable-links/samples/{id}
//      */
//     downloadableSampleRepositoryV1DeleteDelete: (id: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/products/downloadable-links/samples/${id}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Return the gift message for a specified order.
//      *
//      * @tags giftMessageCartRepositoryV1
//      * @name GiftMessageCartRepositoryV1GetGet
//      * @request GET:/V1/carts/{cartId}/gift-message
//      */
//     giftMessageCartRepositoryV1GetGet: (cartId: number, params: RequestParams = {}) =>
//       this.request<GiftMessageDataMessageInterface, ErrorResponse>({
//         path: `/V1/carts/${cartId}/gift-message`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Set the gift message for an entire order.
//      *
//      * @tags giftMessageCartRepositoryV1
//      * @name GiftMessageCartRepositoryV1SavePost
//      * @request POST:/V1/carts/{cartId}/gift-message
//      */
//     giftMessageCartRepositoryV1SavePost: (
//       cartId: number,
//       giftMessageCartRepositoryV1SavePostBody: { giftMessage: GiftMessageDataMessageInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/carts/${cartId}/gift-message`,
//         method: "POST",
//         body: giftMessageCartRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Return the gift message for a specified order.
//      *
//      * @tags giftMessageCartRepositoryV1
//      * @name GiftMessageCartRepositoryV1GetGet2
//      * @request GET:/V1/carts/mine/gift-message
//      * @originalName giftMessageCartRepositoryV1GetGet
//      * @duplicate
//      */
//     giftMessageCartRepositoryV1GetGet2: (params: RequestParams = {}) =>
//       this.request<GiftMessageDataMessageInterface, ErrorResponse>({
//         path: `/V1/carts/mine/gift-message`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Set the gift message for an entire order.
//      *
//      * @tags giftMessageCartRepositoryV1
//      * @name GiftMessageCartRepositoryV1SavePost2
//      * @request POST:/V1/carts/mine/gift-message
//      * @originalName giftMessageCartRepositoryV1SavePost
//      * @duplicate
//      */
//     giftMessageCartRepositoryV1SavePost2: (
//       giftMessageCartRepositoryV1SavePostBody: { giftMessage: GiftMessageDataMessageInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/carts/mine/gift-message`,
//         method: "POST",
//         body: giftMessageCartRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Return the gift message for a specified item in a specified shopping cart.
//      *
//      * @tags giftMessageItemRepositoryV1
//      * @name GiftMessageItemRepositoryV1GetGet
//      * @request GET:/V1/carts/{cartId}/gift-message/{itemId}
//      */
//     giftMessageItemRepositoryV1GetGet: (cartId: number, itemId: number, params: RequestParams = {}) =>
//       this.request<GiftMessageDataMessageInterface, ErrorResponse>({
//         path: `/V1/carts/${cartId}/gift-message/${itemId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Set the gift message for a specified item in a specified shopping cart.
//      *
//      * @tags giftMessageItemRepositoryV1
//      * @name GiftMessageItemRepositoryV1SavePost
//      * @request POST:/V1/carts/{cartId}/gift-message/{itemId}
//      */
//     giftMessageItemRepositoryV1SavePost: (
//       cartId: number,
//       itemId: number,
//       giftMessageItemRepositoryV1SavePostBody: { giftMessage: GiftMessageDataMessageInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/carts/${cartId}/gift-message/${itemId}`,
//         method: "POST",
//         body: giftMessageItemRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Return the gift message for a specified item in a specified shopping cart.
//      *
//      * @tags giftMessageItemRepositoryV1
//      * @name GiftMessageItemRepositoryV1GetGet2
//      * @request GET:/V1/carts/mine/gift-message/{itemId}
//      * @originalName giftMessageItemRepositoryV1GetGet
//      * @duplicate
//      */
//     giftMessageItemRepositoryV1GetGet2: (itemId: number, params: RequestParams = {}) =>
//       this.request<GiftMessageDataMessageInterface, ErrorResponse>({
//         path: `/V1/carts/mine/gift-message/${itemId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Set the gift message for a specified item in a specified shopping cart.
//      *
//      * @tags giftMessageItemRepositoryV1
//      * @name GiftMessageItemRepositoryV1SavePost2
//      * @request POST:/V1/carts/mine/gift-message/{itemId}
//      * @originalName giftMessageItemRepositoryV1SavePost
//      * @duplicate
//      */
//     giftMessageItemRepositoryV1SavePost2: (
//       itemId: number,
//       giftMessageItemRepositoryV1SavePostBody: { giftMessage: GiftMessageDataMessageInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/carts/mine/gift-message/${itemId}`,
//         method: "POST",
//         body: giftMessageItemRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Return the gift message for a specified order.
//      *
//      * @tags giftMessageGuestCartRepositoryV1
//      * @name GiftMessageGuestCartRepositoryV1GetGet
//      * @request GET:/V1/guest-carts/{cartId}/gift-message
//      */
//     giftMessageGuestCartRepositoryV1GetGet: (cartId: string, params: RequestParams = {}) =>
//       this.request<GiftMessageDataMessageInterface, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/gift-message`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Set the gift message for an entire order.
//      *
//      * @tags giftMessageGuestCartRepositoryV1
//      * @name GiftMessageGuestCartRepositoryV1SavePost
//      * @request POST:/V1/guest-carts/{cartId}/gift-message
//      */
//     giftMessageGuestCartRepositoryV1SavePost: (
//       cartId: string,
//       giftMessageGuestCartRepositoryV1SavePostBody: { giftMessage: GiftMessageDataMessageInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/gift-message`,
//         method: "POST",
//         body: giftMessageGuestCartRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Return the gift message for a specified item in a specified shopping cart.
//      *
//      * @tags giftMessageGuestItemRepositoryV1
//      * @name GiftMessageGuestItemRepositoryV1GetGet
//      * @request GET:/V1/guest-carts/{cartId}/gift-message/{itemId}
//      */
//     giftMessageGuestItemRepositoryV1GetGet: (cartId: string, itemId: number, params: RequestParams = {}) =>
//       this.request<GiftMessageDataMessageInterface, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/gift-message/${itemId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Set the gift message for a specified item in a specified shopping cart.
//      *
//      * @tags giftMessageGuestItemRepositoryV1
//      * @name GiftMessageGuestItemRepositoryV1SavePost
//      * @request POST:/V1/guest-carts/{cartId}/gift-message/{itemId}
//      */
//     giftMessageGuestItemRepositoryV1SavePost: (
//       cartId: string,
//       itemId: number,
//       giftMessageGuestItemRepositoryV1SavePostBody: { giftMessage: GiftMessageDataMessageInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/guest-carts/${cartId}/gift-message/${itemId}`,
//         method: "POST",
//         body: giftMessageGuestItemRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get all children for Configurable product
//      *
//      * @tags configurableProductLinkManagementV1
//      * @name ConfigurableProductLinkManagementV1GetChildrenGet
//      * @request GET:/V1/configurable-products/{sku}/children
//      */
//     configurableProductLinkManagementV1GetChildrenGet: (sku: string, params: RequestParams = {}) =>
//       this.request<CatalogDataProductInterface[], ErrorResponse>({
//         path: `/V1/configurable-products/${sku}/children`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Remove configurable product option
//      *
//      * @tags configurableProductLinkManagementV1
//      * @name ConfigurableProductLinkManagementV1RemoveChildDelete
//      * @request DELETE:/V1/configurable-products/{sku}/children/{childSku}
//      */
//     configurableProductLinkManagementV1RemoveChildDelete: (sku: string, childSku: string, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/configurable-products/${sku}/children/${childSku}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags configurableProductLinkManagementV1
//      * @name ConfigurableProductLinkManagementV1AddChildPost
//      * @request POST:/V1/configurable-products/{sku}/child
//      */
//     configurableProductLinkManagementV1AddChildPost: (
//       sku: string,
//       configurableProductLinkManagementV1AddChildPostBody: { childSku: string },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/configurable-products/${sku}/child`,
//         method: "POST",
//         body: configurableProductLinkManagementV1AddChildPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Generate variation based on same product
//      *
//      * @tags configurableProductConfigurableProductManagementV1
//      * @name ConfigurableProductConfigurableProductManagementV1GenerateVariationPut
//      * @request PUT:/V1/configurable-products/variation
//      */
//     configurableProductConfigurableProductManagementV1GenerateVariationPut: (
//       configurableProductConfigurableProductManagementV1GenerateVariationPutBody: {
//         product: CatalogDataProductInterface;
//         options: ConfigurableProductDataOptionInterface[];
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<CatalogDataProductInterface[], ErrorResponse>({
//         path: `/V1/configurable-products/variation`,
//         method: "PUT",
//         body: configurableProductConfigurableProductManagementV1GenerateVariationPutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get option for configurable product
//      *
//      * @tags configurableProductOptionRepositoryV1
//      * @name ConfigurableProductOptionRepositoryV1GetGet
//      * @request GET:/V1/configurable-products/{sku}/options/{id}
//      */
//     configurableProductOptionRepositoryV1GetGet: (sku: string, id: number, params: RequestParams = {}) =>
//       this.request<ConfigurableProductDataOptionInterface, ErrorResponse>({
//         path: `/V1/configurable-products/${sku}/options/${id}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save option
//      *
//      * @tags configurableProductOptionRepositoryV1
//      * @name ConfigurableProductOptionRepositoryV1SavePut
//      * @request PUT:/V1/configurable-products/{sku}/options/{id}
//      */
//     configurableProductOptionRepositoryV1SavePut: (
//       sku: string,
//       id: string,
//       configurableProductOptionRepositoryV1SavePutBody: { option: ConfigurableProductDataOptionInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/configurable-products/${sku}/options/${id}`,
//         method: "PUT",
//         body: configurableProductOptionRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Remove option from configurable product
//      *
//      * @tags configurableProductOptionRepositoryV1
//      * @name ConfigurableProductOptionRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/configurable-products/{sku}/options/{id}
//      */
//     configurableProductOptionRepositoryV1DeleteByIdDelete: (sku: string, id: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/configurable-products/${sku}/options/${id}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get all options for configurable product
//      *
//      * @tags configurableProductOptionRepositoryV1
//      * @name ConfigurableProductOptionRepositoryV1GetListGet
//      * @request GET:/V1/configurable-products/{sku}/options/all
//      */
//     configurableProductOptionRepositoryV1GetListGet: (sku: string, params: RequestParams = {}) =>
//       this.request<ConfigurableProductDataOptionInterface[], ErrorResponse>({
//         path: `/V1/configurable-products/${sku}/options/all`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save option
//      *
//      * @tags configurableProductOptionRepositoryV1
//      * @name ConfigurableProductOptionRepositoryV1SavePost
//      * @request POST:/V1/configurable-products/{sku}/options
//      */
//     configurableProductOptionRepositoryV1SavePost: (
//       sku: string,
//       configurableProductOptionRepositoryV1SavePostBody: { option: ConfigurableProductDataOptionInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/configurable-products/${sku}/options`,
//         method: "POST",
//         body: configurableProductOptionRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags analyticsLinkProviderV1
//      * @name AnalyticsLinkProviderV1GetGet
//      * @request GET:/V1/analytics/link
//      */
//     analyticsLinkProviderV1GetGet: (params: RequestParams = {}) =>
//       this.request<AnalyticsDataLinkInterface, ErrorResponse>({
//         path: `/V1/analytics/link`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Find Sources by SearchCriteria SearchCriteria is not required because load all stocks is useful case
//      *
//      * @tags inventoryApiSourceRepositoryV1
//      * @name InventoryApiSourceRepositoryV1GetListGet
//      * @request GET:/V1/inventory/sources
//      */
//     inventoryApiSourceRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<InventoryApiDataSourceSearchResultsInterface, ErrorResponse>({
//         path: `/V1/inventory/sources`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save Source data
//      *
//      * @tags inventoryApiSourceRepositoryV1
//      * @name InventoryApiSourceRepositoryV1SavePost
//      * @request POST:/V1/inventory/sources
//      */
//     inventoryApiSourceRepositoryV1SavePost: (
//       inventoryApiSourceRepositoryV1SavePostBody: { source: InventoryApiDataSourceInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<any, ErrorResponse>({
//         path: `/V1/inventory/sources`,
//         method: "POST",
//         body: inventoryApiSourceRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * @description Get Source data by given code. If you want to create plugin on get method, also you need to create separate plugin on getList method, because entity loading way is different for these methods
//      *
//      * @tags inventoryApiSourceRepositoryV1
//      * @name InventoryApiSourceRepositoryV1GetGet
//      * @request GET:/V1/inventory/sources/{sourceCode}
//      */
//     inventoryApiSourceRepositoryV1GetGet: (sourceCode: string, params: RequestParams = {}) =>
//       this.request<InventoryApiDataSourceInterface, ErrorResponse>({
//         path: `/V1/inventory/sources/${sourceCode}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save Source data
//      *
//      * @tags inventoryApiSourceRepositoryV1
//      * @name InventoryApiSourceRepositoryV1SavePut
//      * @request PUT:/V1/inventory/sources/{sourceCode}
//      */
//     inventoryApiSourceRepositoryV1SavePut: (
//       sourceCode: string,
//       inventoryApiSourceRepositoryV1SavePutBody: { source: InventoryApiDataSourceInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<any, ErrorResponse>({
//         path: `/V1/inventory/sources/${sourceCode}`,
//         method: "PUT",
//         body: inventoryApiSourceRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * @description Get Sources assigned to Stock ordered by priority If Stock with given id doesn't exist then return an empty array
//      *
//      * @tags inventoryApiGetSourcesAssignedToStockOrderedByPriorityV1
//      * @name InventoryApiGetSourcesAssignedToStockOrderedByPriorityV1ExecuteGet
//      * @request GET:/V1/inventory/get-sources-assigned-to-stock-ordered-by-priority/{stockId}
//      */
//     inventoryApiGetSourcesAssignedToStockOrderedByPriorityV1ExecuteGet: (stockId: number, params: RequestParams = {}) =>
//       this.request<InventoryApiDataSourceInterface[], ErrorResponse>({
//         path: `/V1/inventory/get-sources-assigned-to-stock-ordered-by-priority/${stockId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Find Stocks by given SearchCriteria SearchCriteria is not required because load all stocks is useful case
//      *
//      * @tags inventoryApiStockRepositoryV1
//      * @name InventoryApiStockRepositoryV1GetListGet
//      * @request GET:/V1/inventory/stocks
//      */
//     inventoryApiStockRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<InventoryApiDataStockSearchResultsInterface, ErrorResponse>({
//         path: `/V1/inventory/stocks`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save Stock data
//      *
//      * @tags inventoryApiStockRepositoryV1
//      * @name InventoryApiStockRepositoryV1SavePost
//      * @request POST:/V1/inventory/stocks
//      */
//     inventoryApiStockRepositoryV1SavePost: (
//       inventoryApiStockRepositoryV1SavePostBody: { stock: InventoryApiDataStockInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/inventory/stocks`,
//         method: "POST",
//         body: inventoryApiStockRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get Stock data by given stockId. If you want to create plugin on get method, also you need to create separate plugin on getList method, because entity loading way is different for these methods
//      *
//      * @tags inventoryApiStockRepositoryV1
//      * @name InventoryApiStockRepositoryV1GetGet
//      * @request GET:/V1/inventory/stocks/{stockId}
//      */
//     inventoryApiStockRepositoryV1GetGet: (stockId: number, params: RequestParams = {}) =>
//       this.request<InventoryApiDataStockInterface, ErrorResponse>({
//         path: `/V1/inventory/stocks/${stockId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete the Stock data by stockId. If stock is not found do nothing
//      *
//      * @tags inventoryApiStockRepositoryV1
//      * @name InventoryApiStockRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/inventory/stocks/{stockId}
//      */
//     inventoryApiStockRepositoryV1DeleteByIdDelete: (stockId: number, params: RequestParams = {}) =>
//       this.request<any, ErrorResponse>({
//         path: `/V1/inventory/stocks/${stockId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * @description Save Stock data
//      *
//      * @tags inventoryApiStockRepositoryV1
//      * @name InventoryApiStockRepositoryV1SavePut
//      * @request PUT:/V1/inventory/stocks/{stockId}
//      */
//     inventoryApiStockRepositoryV1SavePut: (
//       stockId: string,
//       inventoryApiStockRepositoryV1SavePutBody: { stock: InventoryApiDataStockInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/inventory/stocks/${stockId}`,
//         method: "PUT",
//         body: inventoryApiStockRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Find StockSourceLink list by given SearchCriteria
//      *
//      * @tags inventoryApiGetStockSourceLinksV1
//      * @name InventoryApiGetStockSourceLinksV1ExecuteGet
//      * @request GET:/V1/inventory/stock-source-links
//      */
//     inventoryApiGetStockSourceLinksV1ExecuteGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<InventoryApiDataStockSourceLinkSearchResultsInterface, ErrorResponse>({
//         path: `/V1/inventory/stock-source-links`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save StockSourceLink list data
//      *
//      * @tags inventoryApiStockSourceLinksSaveV1
//      * @name InventoryApiStockSourceLinksSaveV1ExecutePost
//      * @request POST:/V1/inventory/stock-source-links
//      */
//     inventoryApiStockSourceLinksSaveV1ExecutePost: (
//       inventoryApiStockSourceLinksSaveV1ExecutePostBody: { links: InventoryApiDataStockSourceLinkInterface[] },
//       params: RequestParams = {},
//     ) =>
//       this.request<any, ErrorResponse>({
//         path: `/V1/inventory/stock-source-links`,
//         method: "POST",
//         body: inventoryApiStockSourceLinksSaveV1ExecutePostBody,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * @description Remove StockSourceLink list list
//      *
//      * @tags inventoryApiStockSourceLinksDeleteV1
//      * @name InventoryApiStockSourceLinksDeleteV1ExecutePost
//      * @request POST:/V1/inventory/stock-source-links-delete
//      */
//     inventoryApiStockSourceLinksDeleteV1ExecutePost: (
//       inventoryApiStockSourceLinksDeleteV1ExecutePostBody: { links: InventoryApiDataStockSourceLinkInterface[] },
//       params: RequestParams = {},
//     ) =>
//       this.request<any, ErrorResponse>({
//         path: `/V1/inventory/stock-source-links-delete`,
//         method: "POST",
//         body: inventoryApiStockSourceLinksDeleteV1ExecutePostBody,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * @description Find SourceItems by SearchCriteria We need to have this method for direct work with SourceItems because this object contains additional data like as qty, status (for example can be searchable by additional field)
//      *
//      * @tags inventoryApiSourceItemRepositoryV1
//      * @name InventoryApiSourceItemRepositoryV1GetListGet
//      * @request GET:/V1/inventory/source-items
//      */
//     inventoryApiSourceItemRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<InventoryApiDataSourceItemSearchResultsInterface, ErrorResponse>({
//         path: `/V1/inventory/source-items`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save Multiple Source item data
//      *
//      * @tags inventoryApiSourceItemsSaveV1
//      * @name InventoryApiSourceItemsSaveV1ExecutePost
//      * @request POST:/V1/inventory/source-items
//      */
//     inventoryApiSourceItemsSaveV1ExecutePost: (
//       inventoryApiSourceItemsSaveV1ExecutePostBody: { sourceItems: InventoryApiDataSourceItemInterface[] },
//       params: RequestParams = {},
//     ) =>
//       this.request<any, ErrorResponse>({
//         path: `/V1/inventory/source-items`,
//         method: "POST",
//         body: inventoryApiSourceItemsSaveV1ExecutePostBody,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * @description Delete Multiple Source item data
//      *
//      * @tags inventoryApiSourceItemsDeleteV1
//      * @name InventoryApiSourceItemsDeleteV1ExecutePost
//      * @request POST:/V1/inventory/source-items-delete
//      */
//     inventoryApiSourceItemsDeleteV1ExecutePost: (
//       inventoryApiSourceItemsDeleteV1ExecutePostBody: { sourceItems: InventoryApiDataSourceItemInterface[] },
//       params: RequestParams = {},
//     ) =>
//       this.request<any, ErrorResponse>({
//         path: `/V1/inventory/source-items-delete`,
//         method: "POST",
//         body: inventoryApiSourceItemsDeleteV1ExecutePostBody,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * @description Run mass product to source assignment
//      *
//      * @tags inventoryCatalogApiBulkSourceAssignV1
//      * @name InventoryCatalogApiBulkSourceAssignV1ExecutePost
//      * @request POST:/V1/inventory/bulk-product-source-assign
//      */
//     inventoryCatalogApiBulkSourceAssignV1ExecutePost: (
//       inventoryCatalogApiBulkSourceAssignV1ExecutePostBody: { skus: string[]; sourceCodes: string[] },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/inventory/bulk-product-source-assign`,
//         method: "POST",
//         body: inventoryCatalogApiBulkSourceAssignV1ExecutePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Run mass product to source un-assignment
//      *
//      * @tags inventoryCatalogApiBulkSourceUnassignV1
//      * @name InventoryCatalogApiBulkSourceUnassignV1ExecutePost
//      * @request POST:/V1/inventory/bulk-product-source-unassign
//      */
//     inventoryCatalogApiBulkSourceUnassignV1ExecutePost: (
//       inventoryCatalogApiBulkSourceUnassignV1ExecutePostBody: { skus: string[]; sourceCodes: string[] },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/inventory/bulk-product-source-unassign`,
//         method: "POST",
//         body: inventoryCatalogApiBulkSourceUnassignV1ExecutePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Run bulk inventory transfer
//      *
//      * @tags inventoryCatalogApiBulkInventoryTransferV1
//      * @name InventoryCatalogApiBulkInventoryTransferV1ExecutePost
//      * @request POST:/V1/inventory/bulk-product-source-transfer
//      */
//     inventoryCatalogApiBulkInventoryTransferV1ExecutePost: (
//       inventoryCatalogApiBulkInventoryTransferV1ExecutePostBody: {
//         skus: string[];
//         originSource: string;
//         destinationSource: string;
//         unassignFromOrigin: boolean;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/inventory/bulk-product-source-transfer`,
//         method: "POST",
//         body: inventoryCatalogApiBulkInventoryTransferV1ExecutePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Run bulk partial inventory transfer for specified items.
//      *
//      * @tags inventoryCatalogApiBulkPartialInventoryTransferV1
//      * @name InventoryCatalogApiBulkPartialInventoryTransferV1ExecutePost
//      * @request POST:/V1/inventory/bulk-partial-source-transfer
//      */
//     inventoryCatalogApiBulkPartialInventoryTransferV1ExecutePost: (
//       inventoryCatalogApiBulkPartialInventoryTransferV1ExecutePostBody: {
//         originSourceCode: string;
//         destinationSourceCode: string;
//         items: InventoryCatalogApiDataPartialInventoryTransferItemInterface[];
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<any, ErrorResponse>({
//         path: `/V1/inventory/bulk-partial-source-transfer`,
//         method: "POST",
//         body: inventoryCatalogApiBulkPartialInventoryTransferV1ExecutePostBody,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * @description Get Default distance provider code
//      *
//      * @tags inventoryDistanceBasedSourceSelectionApiGetDistanceProviderCodeV1
//      * @name InventoryDistanceBasedSourceSelectionApiGetDistanceProviderCodeV1ExecuteGet
//      * @request GET:/V1/inventory/get-distance-provider-code
//      */
//     inventoryDistanceBasedSourceSelectionApiGetDistanceProviderCodeV1ExecuteGet: (params: RequestParams = {}) =>
//       this.request<string, ErrorResponse>({
//         path: `/V1/inventory/get-distance-provider-code`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get distance between two points
//      *
//      * @tags inventoryDistanceBasedSourceSelectionApiGetDistanceV1
//      * @name InventoryDistanceBasedSourceSelectionApiGetDistanceV1ExecuteGet
//      * @request GET:/V1/inventory/get-distance
//      */
//     inventoryDistanceBasedSourceSelectionApiGetDistanceV1ExecuteGet: (
//       query?: {
//         "source[lat]"?: number;
//         "source[lng]"?: number;
//         "destination[lat]"?: number;
//         "destination[lng]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/inventory/get-distance`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get latitude and longitude object from address
//      *
//      * @tags inventoryDistanceBasedSourceSelectionApiGetLatLngFromAddressV1
//      * @name InventoryDistanceBasedSourceSelectionApiGetLatLngFromAddressV1ExecuteGet
//      * @request GET:/V1/inventory/get-latlng-from-address
//      */
//     inventoryDistanceBasedSourceSelectionApiGetLatLngFromAddressV1ExecuteGet: (
//       query?: {
//         "address[country]"?: string;
//         "address[postcode]"?: string;
//         "address[street]"?: string;
//         "address[region]"?: string;
//         "address[city]"?: string;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<InventoryDistanceBasedSourceSelectionApiDataLatLngInterface, ErrorResponse>({
//         path: `/V1/inventory/get-latlng-from-address`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get all available latitude and longitude objects from address.
//      *
//      * @tags inventoryDistanceBasedSourceSelectionApiGetLatsLngsFromAddressV1
//      * @name InventoryDistanceBasedSourceSelectionApiGetLatsLngsFromAddressV1ExecuteGet
//      * @request GET:/V1/inventory/get-latslngs-from-address
//      */
//     inventoryDistanceBasedSourceSelectionApiGetLatsLngsFromAddressV1ExecuteGet: (
//       query?: {
//         "address[country]"?: string;
//         "address[postcode]"?: string;
//         "address[street]"?: string;
//         "address[region]"?: string;
//         "address[city]"?: string;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<InventoryDistanceBasedSourceSelectionApiDataLatLngInterface[], ErrorResponse>({
//         path: `/V1/inventory/get-latslngs-from-address`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Export product stock data filtered by search criteria.
//      *
//      * @tags inventoryExportStockApiExportStockSalableQtyV1
//      * @name InventoryExportStockApiExportStockSalableQtyV1ExecuteGet
//      * @request GET:/V1/inventory/export-stock-salable-qty/{salesChannelType}/{salesChannelCode}
//      */
//     inventoryExportStockApiExportStockSalableQtyV1ExecuteGet: (
//       salesChannelType: string,
//       salesChannelCode: string,
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<InventoryExportStockApiDataExportStockSalableQtySearchResultInterface, ErrorResponse>({
//         path: `/V1/inventory/export-stock-salable-qty/${salesChannelType}/${salesChannelCode}`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Provides stock index export from inventory_stock_% table
//      *
//      * @tags inventoryExportStockApiExportStockIndexDataV1
//      * @name InventoryExportStockApiExportStockIndexDataV1ExecuteGet
//      * @request GET:/V1/inventory/dump-stock-index-data/{salesChannelType}/{salesChannelCode}
//      */
//     inventoryExportStockApiExportStockIndexDataV1ExecuteGet: (
//       salesChannelType: string,
//       salesChannelCode: string,
//       params: RequestParams = {},
//     ) =>
//       this.request<InventoryExportStockApiDataProductStockIndexDataInterface[], ErrorResponse>({
//         path: `/V1/inventory/dump-stock-index-data/${salesChannelType}/${salesChannelCode}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get Product Quantity for given SKU and Stock
//      *
//      * @tags inventorySalesApiGetProductSalableQtyV1
//      * @name InventorySalesApiGetProductSalableQtyV1ExecuteGet
//      * @request GET:/V1/inventory/get-product-salable-quantity/{sku}/{stockId}
//      */
//     inventorySalesApiGetProductSalableQtyV1ExecuteGet: (sku: string, stockId: number, params: RequestParams = {}) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/inventory/get-product-salable-quantity/${sku}/${stockId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get is product in salable for given SKU in a given Stock
//      *
//      * @tags inventorySalesApiIsProductSalableV1
//      * @name InventorySalesApiIsProductSalableV1ExecuteGet
//      * @request GET:/V1/inventory/is-product-salable/{sku}/{stockId}
//      */
//     inventorySalesApiIsProductSalableV1ExecuteGet: (sku: string, stockId: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/inventory/is-product-salable/${sku}/${stockId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get products salable status for given SKUs and given Stock.
//      *
//      * @tags inventorySalesApiAreProductsSalableV1
//      * @name InventorySalesApiAreProductsSalableV1ExecuteGet
//      * @request GET:/V1/inventory/are-products-salable
//      */
//     inventorySalesApiAreProductsSalableV1ExecuteGet: (
//       query: { skus: string[]; stockId: number },
//       params: RequestParams = {},
//     ) =>
//       this.request<InventorySalesApiDataIsProductSalableResultInterface[], ErrorResponse>({
//         path: `/V1/inventory/are-products-salable`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get is product salable for given SKU in a given Stock for a certain Qty
//      *
//      * @tags inventorySalesApiIsProductSalableForRequestedQtyV1
//      * @name InventorySalesApiIsProductSalableForRequestedQtyV1ExecuteGet
//      * @request GET:/V1/inventory/is-product-salable-for-requested-qty/{sku}/{stockId}/{requestedQty}
//      */
//     inventorySalesApiIsProductSalableForRequestedQtyV1ExecuteGet: (
//       sku: string,
//       stockId: number,
//       requestedQty: number,
//       params: RequestParams = {},
//     ) =>
//       this.request<InventorySalesApiDataProductSalableResultInterface, ErrorResponse>({
//         path: `/V1/inventory/is-product-salable-for-requested-qty/${sku}/${stockId}/${requestedQty}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get whether products are salable in requested Qty for given set of SKUs in specified stock.
//      *
//      * @tags inventorySalesApiAreProductsSalableForRequestedQtyV1
//      * @name InventorySalesApiAreProductsSalableForRequestedQtyV1ExecuteGet
//      * @request GET:/V1/inventory/are-product-salable-for-requested-qty/
//      */
//     inventorySalesApiAreProductsSalableForRequestedQtyV1ExecuteGet: (
//       query: { "skuRequests[0][sku]"?: string; "skuRequests[0][qty]"?: number; stockId: number },
//       params: RequestParams = {},
//     ) =>
//       this.request<InventorySalesApiDataIsProductSalableForRequestedQtyResultInterface[], ErrorResponse>({
//         path: `/V1/inventory/are-product-salable-for-requested-qty/`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Resolve Stock by Sales Channel type and code
//      *
//      * @tags inventorySalesApiStockResolverV1
//      * @name InventorySalesApiStockResolverV1ExecuteGet
//      * @request GET:/V1/inventory/stock-resolver/{type}/{code}
//      */
//     inventorySalesApiStockResolverV1ExecuteGet: (type: string, code: string, params: RequestParams = {}) =>
//       this.request<InventoryApiDataStockInterface, ErrorResponse>({
//         path: `/V1/inventory/stock-resolver/${type}/${code}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get Pickup Locations according to the results of filtration by Search Request.
//      *
//      * @tags inventoryInStorePickupApiGetPickupLocationsV1
//      * @name InventoryInStorePickupApiGetPickupLocationsV1ExecuteGet
//      * @request GET:/V1/inventory/in-store-pickup/pickup-locations/
//      */
//     inventoryInStorePickupApiGetPickupLocationsV1ExecuteGet: (
//       query?: {
//         "searchRequest[area][radius]"?: number;
//         "searchRequest[area][searchTerm]"?: string;
//         "searchRequest[filters][country][value]"?: string;
//         "searchRequest[filters][country][conditionType]"?: string;
//         "searchRequest[filters][postcode][value]"?: string;
//         "searchRequest[filters][postcode][conditionType]"?: string;
//         "searchRequest[filters][region][value]"?: string;
//         "searchRequest[filters][region][conditionType]"?: string;
//         "searchRequest[filters][regionId][value]"?: string;
//         "searchRequest[filters][regionId][conditionType]"?: string;
//         "searchRequest[filters][city][value]"?: string;
//         "searchRequest[filters][city][conditionType]"?: string;
//         "searchRequest[filters][street][value]"?: string;
//         "searchRequest[filters][street][conditionType]"?: string;
//         "searchRequest[filters][name][value]"?: string;
//         "searchRequest[filters][name][conditionType]"?: string;
//         "searchRequest[filters][pickupLocationCode][value]"?: string;
//         "searchRequest[filters][pickupLocationCode][conditionType]"?: string;
//         "searchRequest[pageSize]"?: number;
//         "searchRequest[currentPage]"?: number;
//         "searchRequest[scopeType]"?: string;
//         "searchRequest[scopeCode]"?: string;
//         "searchRequest[sort][0][field]"?: string;
//         "searchRequest[sort][0][direction]"?: string;
//         "searchRequest[extensionAttributes][productsInfo][0][sku]"?: string;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<InventoryInStorePickupApiDataSearchResultInterface, ErrorResponse>({
//         path: `/V1/inventory/in-store-pickup/pickup-locations/`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags inventorySourceSelectionApiGetSourceSelectionAlgorithmListV1
//      * @name InventorySourceSelectionApiGetSourceSelectionAlgorithmListV1ExecuteGet
//      * @request GET:/V1/inventory/source-selection-algorithm-list
//      */
//     inventorySourceSelectionApiGetSourceSelectionAlgorithmListV1ExecuteGet: (params: RequestParams = {}) =>
//       this.request<InventorySourceSelectionApiDataSourceSelectionAlgorithmInterface[], ErrorResponse>({
//         path: `/V1/inventory/source-selection-algorithm-list`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags inventorySourceSelectionApiSourceSelectionServiceV1
//      * @name InventorySourceSelectionApiSourceSelectionServiceV1ExecutePost
//      * @request POST:/V1/inventory/source-selection-algorithm-result
//      */
//     inventorySourceSelectionApiSourceSelectionServiceV1ExecutePost: (
//       inventorySourceSelectionApiSourceSelectionServiceV1ExecutePostBody: {
//         inventoryRequest: InventorySourceSelectionApiDataInventoryRequestInterface;
//         algorithmCode: string;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<InventorySourceSelectionApiDataSourceSelectionResultInterface, ErrorResponse>({
//         path: `/V1/inventory/source-selection-algorithm-result`,
//         method: "POST",
//         body: inventorySourceSelectionApiSourceSelectionServiceV1ExecutePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Notify customer that the orders is ready for pickup.
//      *
//      * @tags inventoryInStorePickupSalesApiNotifyOrdersAreReadyForPickupV1
//      * @name InventoryInStorePickupSalesApiNotifyOrdersAreReadyForPickupV1ExecutePost
//      * @request POST:/V1/order/notify-orders-are-ready-for-pickup
//      */
//     inventoryInStorePickupSalesApiNotifyOrdersAreReadyForPickupV1ExecutePost: (
//       inventoryInStorePickupSalesApiNotifyOrdersAreReadyForPickupV1ExecutePostBody: { orderIds: number[] },
//       params: RequestParams = {},
//     ) =>
//       this.request<InventoryInStorePickupSalesApiDataResultInterface, ErrorResponse>({
//         path: `/V1/order/notify-orders-are-ready-for-pickup`,
//         method: "POST",
//         body: inventoryInStorePickupSalesApiNotifyOrdersAreReadyForPickupV1ExecutePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get the source item configuration
//      *
//      * @tags inventoryLowQuantityNotificationApiGetSourceItemConfigurationV1
//      * @name InventoryLowQuantityNotificationApiGetSourceItemConfigurationV1ExecuteGet
//      * @request GET:/V1/inventory/low-quantity-notification/{sourceCode}/{sku}
//      */
//     inventoryLowQuantityNotificationApiGetSourceItemConfigurationV1ExecuteGet: (
//       sourceCode: string,
//       sku: string,
//       params: RequestParams = {},
//     ) =>
//       this.request<InventoryLowQuantityNotificationApiDataSourceItemConfigurationInterface, ErrorResponse>({
//         path: `/V1/inventory/low-quantity-notification/${sourceCode}/${sku}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags inventoryLowQuantityNotificationApiSourceItemConfigurationsSaveV1
//      * @name InventoryLowQuantityNotificationApiSourceItemConfigurationsSaveV1ExecutePost
//      * @request POST:/V1/inventory/low-quantity-notification
//      */
//     inventoryLowQuantityNotificationApiSourceItemConfigurationsSaveV1ExecutePost: (
//       inventoryLowQuantityNotificationApiSourceItemConfigurationsSaveV1ExecutePostBody: {
//         sourceItemConfigurations: InventoryLowQuantityNotificationApiDataSourceItemConfigurationInterface[];
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<any, ErrorResponse>({
//         path: `/V1/inventory/low-quantity-notification`,
//         method: "POST",
//         body: inventoryLowQuantityNotificationApiSourceItemConfigurationsSaveV1ExecutePostBody,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * @description Delete multiple source items configuration for low quantity
//      *
//      * @tags inventoryLowQuantityNotificationApiDeleteSourceItemsConfigurationV1
//      * @name InventoryLowQuantityNotificationApiDeleteSourceItemsConfigurationV1ExecutePost
//      * @request POST:/V1/inventory/low-quantity-notifications-delete
//      */
//     inventoryLowQuantityNotificationApiDeleteSourceItemsConfigurationV1ExecutePost: (
//       inventoryLowQuantityNotificationApiDeleteSourceItemsConfigurationV1ExecutePostBody: {
//         sourceItems: InventoryApiDataSourceItemInterface[];
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<any, ErrorResponse>({
//         path: `/V1/inventory/low-quantity-notifications-delete`,
//         method: "POST",
//         body: inventoryLowQuantityNotificationApiDeleteSourceItemsConfigurationV1ExecutePostBody,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * @description Delete asset
//      *
//      * @tags adobeStockAssetApiAssetRepositoryV1
//      * @name AdobeStockAssetApiAssetRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/adobestock/asset/{id}
//      */
//     adobeStockAssetApiAssetRepositoryV1DeleteByIdDelete: (id: number, params: RequestParams = {}) =>
//       this.request<any, ErrorResponse>({
//         path: `/V1/adobestock/asset/${id}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * @description Get asset by id
//      *
//      * @tags adobeStockAssetApiAssetRepositoryV1
//      * @name AdobeStockAssetApiAssetRepositoryV1GetByIdGet
//      * @request GET:/V1/adobestock/asset/{id}
//      */
//     adobeStockAssetApiAssetRepositoryV1GetByIdGet: (id: number, params: RequestParams = {}) =>
//       this.request<AdobeStockAssetApiDataAssetInterface, ErrorResponse>({
//         path: `/V1/adobestock/asset/${id}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get a list of assets
//      *
//      * @tags adobeStockAssetApiAssetRepositoryV1
//      * @name AdobeStockAssetApiAssetRepositoryV1GetListGet
//      * @request GET:/V1/adobestock/asset/search
//      */
//     adobeStockAssetApiAssetRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<AdobeStockAssetApiDataAssetSearchResultsInterface, ErrorResponse>({
//         path: `/V1/adobestock/asset/search`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Search for images based on search criteria
//      *
//      * @tags adobeStockAssetApiGetAssetListV1
//      * @name AdobeStockAssetApiGetAssetListV1ExecuteGet
//      * @request GET:/V1/adobestock/asset/list
//      */
//     adobeStockAssetApiGetAssetListV1ExecuteGet: (
//       query?: {
//         "searchCriteria[requestName]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<FrameworkSearchSearchResultInterface, ErrorResponse>({
//         path: `/V1/adobestock/asset/list`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get rule by ID.
//      *
//      * @tags salesRuleRuleRepositoryV1
//      * @name SalesRuleRuleRepositoryV1GetByIdGet
//      * @request GET:/V1/salesRules/{ruleId}
//      */
//     salesRuleRuleRepositoryV1GetByIdGet: (ruleId: number, params: RequestParams = {}) =>
//       this.request<SalesRuleDataRuleInterface, ErrorResponse>({
//         path: `/V1/salesRules/${ruleId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save sales rule.
//      *
//      * @tags salesRuleRuleRepositoryV1
//      * @name SalesRuleRuleRepositoryV1SavePut
//      * @request PUT:/V1/salesRules/{ruleId}
//      */
//     salesRuleRuleRepositoryV1SavePut: (
//       ruleId: string,
//       salesRuleRuleRepositoryV1SavePutBody: { rule: SalesRuleDataRuleInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesRuleDataRuleInterface, ErrorResponse>({
//         path: `/V1/salesRules/${ruleId}`,
//         method: "PUT",
//         body: salesRuleRuleRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete rule by ID.
//      *
//      * @tags salesRuleRuleRepositoryV1
//      * @name SalesRuleRuleRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/salesRules/{ruleId}
//      */
//     salesRuleRuleRepositoryV1DeleteByIdDelete: (ruleId: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/salesRules/${ruleId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve sales rules that match te specified criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#RuleRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
//      *
//      * @tags salesRuleRuleRepositoryV1
//      * @name SalesRuleRuleRepositoryV1GetListGet
//      * @request GET:/V1/salesRules/search
//      */
//     salesRuleRuleRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesRuleDataRuleSearchResultInterface, ErrorResponse>({
//         path: `/V1/salesRules/search`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save sales rule.
//      *
//      * @tags salesRuleRuleRepositoryV1
//      * @name SalesRuleRuleRepositoryV1SavePost
//      * @request POST:/V1/salesRules
//      */
//     salesRuleRuleRepositoryV1SavePost: (
//       salesRuleRuleRepositoryV1SavePostBody: { rule: SalesRuleDataRuleInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesRuleDataRuleInterface, ErrorResponse>({
//         path: `/V1/salesRules`,
//         method: "POST",
//         body: salesRuleRuleRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get coupon by coupon id.
//      *
//      * @tags salesRuleCouponRepositoryV1
//      * @name SalesRuleCouponRepositoryV1GetByIdGet
//      * @request GET:/V1/coupons/{couponId}
//      */
//     salesRuleCouponRepositoryV1GetByIdGet: (couponId: number, params: RequestParams = {}) =>
//       this.request<SalesRuleDataCouponInterface, ErrorResponse>({
//         path: `/V1/coupons/${couponId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save a coupon.
//      *
//      * @tags salesRuleCouponRepositoryV1
//      * @name SalesRuleCouponRepositoryV1SavePut
//      * @request PUT:/V1/coupons/{couponId}
//      */
//     salesRuleCouponRepositoryV1SavePut: (
//       couponId: string,
//       salesRuleCouponRepositoryV1SavePutBody: { coupon: SalesRuleDataCouponInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesRuleDataCouponInterface, ErrorResponse>({
//         path: `/V1/coupons/${couponId}`,
//         method: "PUT",
//         body: salesRuleCouponRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete coupon by coupon id.
//      *
//      * @tags salesRuleCouponRepositoryV1
//      * @name SalesRuleCouponRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/coupons/{couponId}
//      */
//     salesRuleCouponRepositoryV1DeleteByIdDelete: (couponId: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/coupons/${couponId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve a coupon using the specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#CouponRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
//      *
//      * @tags salesRuleCouponRepositoryV1
//      * @name SalesRuleCouponRepositoryV1GetListGet
//      * @request GET:/V1/coupons/search
//      */
//     salesRuleCouponRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesRuleDataCouponSearchResultInterface, ErrorResponse>({
//         path: `/V1/coupons/search`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save a coupon.
//      *
//      * @tags salesRuleCouponRepositoryV1
//      * @name SalesRuleCouponRepositoryV1SavePost
//      * @request POST:/V1/coupons
//      */
//     salesRuleCouponRepositoryV1SavePost: (
//       salesRuleCouponRepositoryV1SavePostBody: { coupon: SalesRuleDataCouponInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesRuleDataCouponInterface, ErrorResponse>({
//         path: `/V1/coupons`,
//         method: "POST",
//         body: salesRuleCouponRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Generate coupon for a rule
//      *
//      * @tags salesRuleCouponManagementV1
//      * @name SalesRuleCouponManagementV1GeneratePost
//      * @request POST:/V1/coupons/generate
//      */
//     salesRuleCouponManagementV1GeneratePost: (
//       salesRuleCouponManagementV1GeneratePostBody: { couponSpec: SalesRuleDataCouponGenerationSpecInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<string[], ErrorResponse>({
//         path: `/V1/coupons/generate`,
//         method: "POST",
//         body: salesRuleCouponManagementV1GeneratePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete coupon by coupon ids.
//      *
//      * @tags salesRuleCouponManagementV1
//      * @name SalesRuleCouponManagementV1DeleteByIdsPost
//      * @request POST:/V1/coupons/deleteByIds
//      */
//     salesRuleCouponManagementV1DeleteByIdsPost: (
//       salesRuleCouponManagementV1DeleteByIdsPostBody: { ids: number[]; ignoreInvalidCoupons?: boolean },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesRuleDataCouponMassDeleteResultInterface, ErrorResponse>({
//         path: `/V1/coupons/deleteByIds`,
//         method: "POST",
//         body: salesRuleCouponManagementV1DeleteByIdsPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete coupon by coupon codes.
//      *
//      * @tags salesRuleCouponManagementV1
//      * @name SalesRuleCouponManagementV1DeleteByCodesPost
//      * @request POST:/V1/coupons/deleteByCodes
//      */
//     salesRuleCouponManagementV1DeleteByCodesPost: (
//       salesRuleCouponManagementV1DeleteByCodesPostBody: { codes: string[]; ignoreInvalidCoupons?: boolean },
//       params: RequestParams = {},
//     ) =>
//       this.request<SalesRuleDataCouponMassDeleteResultInterface, ErrorResponse>({
//         path: `/V1/coupons/deleteByCodes`,
//         method: "POST",
//         body: salesRuleCouponManagementV1DeleteByCodesPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Lists active checkout agreements.
//      *
//      * @tags checkoutAgreementsCheckoutAgreementsRepositoryV1
//      * @name CheckoutAgreementsCheckoutAgreementsRepositoryV1GetListGet
//      * @request GET:/V1/carts/licence
//      */
//     checkoutAgreementsCheckoutAgreementsRepositoryV1GetListGet: (params: RequestParams = {}) =>
//       this.request<CheckoutAgreementsDataAgreementInterface[], ErrorResponse>({
//         path: `/V1/carts/licence`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description List of checkout agreements.
//      *
//      * @tags checkoutAgreementsCheckoutAgreementsListV1
//      * @name CheckoutAgreementsCheckoutAgreementsListV1GetListGet
//      * @request GET:/V1/carts/licence/list
//      */
//     checkoutAgreementsCheckoutAgreementsListV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<CheckoutAgreementsDataAgreementInterface[], ErrorResponse>({
//         path: `/V1/carts/licence/list`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Create or update tax rate
//      *
//      * @tags taxTaxRateRepositoryV1
//      * @name TaxTaxRateRepositoryV1SavePost
//      * @request POST:/V1/taxRates
//      */
//     taxTaxRateRepositoryV1SavePost: (
//       taxTaxRateRepositoryV1SavePostBody: { taxRate: TaxDataTaxRateInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<TaxDataTaxRateInterface, ErrorResponse>({
//         path: `/V1/taxRates`,
//         method: "POST",
//         body: taxTaxRateRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Create or update tax rate
//      *
//      * @tags taxTaxRateRepositoryV1
//      * @name TaxTaxRateRepositoryV1SavePut
//      * @request PUT:/V1/taxRates
//      */
//     taxTaxRateRepositoryV1SavePut: (
//       taxTaxRateRepositoryV1SavePutBody: { taxRate: TaxDataTaxRateInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<TaxDataTaxRateInterface, ErrorResponse>({
//         path: `/V1/taxRates`,
//         method: "PUT",
//         body: taxTaxRateRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get tax rate
//      *
//      * @tags taxTaxRateRepositoryV1
//      * @name TaxTaxRateRepositoryV1GetGet
//      * @request GET:/V1/taxRates/{rateId}
//      */
//     taxTaxRateRepositoryV1GetGet: (rateId: number, params: RequestParams = {}) =>
//       this.request<TaxDataTaxRateInterface, ErrorResponse>({
//         path: `/V1/taxRates/${rateId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete tax rate
//      *
//      * @tags taxTaxRateRepositoryV1
//      * @name TaxTaxRateRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/taxRates/{rateId}
//      */
//     taxTaxRateRepositoryV1DeleteByIdDelete: (rateId: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/taxRates/${rateId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Search TaxRates This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#TaxRateRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
//      *
//      * @tags taxTaxRateRepositoryV1
//      * @name TaxTaxRateRepositoryV1GetListGet
//      * @request GET:/V1/taxRates/search
//      */
//     taxTaxRateRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<TaxDataTaxRateSearchResultsInterface, ErrorResponse>({
//         path: `/V1/taxRates/search`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save TaxRule
//      *
//      * @tags taxTaxRuleRepositoryV1
//      * @name TaxTaxRuleRepositoryV1SavePost
//      * @request POST:/V1/taxRules
//      */
//     taxTaxRuleRepositoryV1SavePost: (
//       taxTaxRuleRepositoryV1SavePostBody: { rule: TaxDataTaxRuleInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<TaxDataTaxRuleInterface, ErrorResponse>({
//         path: `/V1/taxRules`,
//         method: "POST",
//         body: taxTaxRuleRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Save TaxRule
//      *
//      * @tags taxTaxRuleRepositoryV1
//      * @name TaxTaxRuleRepositoryV1SavePut
//      * @request PUT:/V1/taxRules
//      */
//     taxTaxRuleRepositoryV1SavePut: (
//       taxTaxRuleRepositoryV1SavePutBody: { rule: TaxDataTaxRuleInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<TaxDataTaxRuleInterface, ErrorResponse>({
//         path: `/V1/taxRules`,
//         method: "PUT",
//         body: taxTaxRuleRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete TaxRule
//      *
//      * @tags taxTaxRuleRepositoryV1
//      * @name TaxTaxRuleRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/taxRules/{ruleId}
//      */
//     taxTaxRuleRepositoryV1DeleteByIdDelete: (ruleId: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/taxRules/${ruleId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get TaxRule
//      *
//      * @tags taxTaxRuleRepositoryV1
//      * @name TaxTaxRuleRepositoryV1GetGet
//      * @request GET:/V1/taxRules/{ruleId}
//      */
//     taxTaxRuleRepositoryV1GetGet: (ruleId: number, params: RequestParams = {}) =>
//       this.request<TaxDataTaxRuleInterface, ErrorResponse>({
//         path: `/V1/taxRules/${ruleId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Search TaxRules This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#TaxRuleRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
//      *
//      * @tags taxTaxRuleRepositoryV1
//      * @name TaxTaxRuleRepositoryV1GetListGet
//      * @request GET:/V1/taxRules/search
//      */
//     taxTaxRuleRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<TaxDataTaxRuleSearchResultsInterface, ErrorResponse>({
//         path: `/V1/taxRules/search`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Create a Tax Class
//      *
//      * @tags taxTaxClassRepositoryV1
//      * @name TaxTaxClassRepositoryV1SavePost
//      * @request POST:/V1/taxClasses
//      */
//     taxTaxClassRepositoryV1SavePost: (
//       taxTaxClassRepositoryV1SavePostBody: { taxClass: TaxDataTaxClassInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<string, ErrorResponse>({
//         path: `/V1/taxClasses`,
//         method: "POST",
//         body: taxTaxClassRepositoryV1SavePostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get a tax class with the given tax class id.
//      *
//      * @tags taxTaxClassRepositoryV1
//      * @name TaxTaxClassRepositoryV1GetGet
//      * @request GET:/V1/taxClasses/{taxClassId}
//      */
//     taxTaxClassRepositoryV1GetGet: (taxClassId: number, params: RequestParams = {}) =>
//       this.request<TaxDataTaxClassInterface, ErrorResponse>({
//         path: `/V1/taxClasses/${taxClassId}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Delete a tax class with the given tax class id.
//      *
//      * @tags taxTaxClassRepositoryV1
//      * @name TaxTaxClassRepositoryV1DeleteByIdDelete
//      * @request DELETE:/V1/taxClasses/{taxClassId}
//      */
//     taxTaxClassRepositoryV1DeleteByIdDelete: (taxClassId: number, params: RequestParams = {}) =>
//       this.request<boolean, ErrorResponse>({
//         path: `/V1/taxClasses/${taxClassId}`,
//         method: "DELETE",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Create a Tax Class
//      *
//      * @tags taxTaxClassRepositoryV1
//      * @name TaxTaxClassRepositoryV1SavePut
//      * @request PUT:/V1/taxClasses/{classId}
//      */
//     taxTaxClassRepositoryV1SavePut: (
//       classId: string,
//       taxTaxClassRepositoryV1SavePutBody: { taxClass: TaxDataTaxClassInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<string, ErrorResponse>({
//         path: `/V1/taxClasses/${classId}`,
//         method: "PUT",
//         body: taxTaxClassRepositoryV1SavePutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Retrieve tax classes which match a specific criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#TaxClassRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
//      *
//      * @tags taxTaxClassRepositoryV1
//      * @name TaxTaxClassRepositoryV1GetListGet
//      * @request GET:/V1/taxClasses/search
//      */
//     taxTaxClassRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<TaxDataTaxClassSearchResultsInterface, ErrorResponse>({
//         path: `/V1/taxClasses/search`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get Bulk summary data with list of operations items full data.
//      *
//      * @tags asynchronousOperationsBulkStatusV1
//      * @name AsynchronousOperationsBulkStatusV1GetBulkDetailedStatusGet
//      * @request GET:/V1/bulk/{bulkUuid}/detailed-status
//      */
//     asynchronousOperationsBulkStatusV1GetBulkDetailedStatusGet: (bulkUuid: string, params: RequestParams = {}) =>
//       this.request<AsynchronousOperationsDataDetailedBulkOperationsStatusInterface, ErrorResponse>({
//         path: `/V1/bulk/${bulkUuid}/detailed-status`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get Bulk summary data with list of operations items short data.
//      *
//      * @tags asynchronousOperationsBulkStatusV1
//      * @name AsynchronousOperationsBulkStatusV1GetBulkShortStatusGet
//      * @request GET:/V1/bulk/{bulkUuid}/status
//      */
//     asynchronousOperationsBulkStatusV1GetBulkShortStatusGet: (bulkUuid: string, params: RequestParams = {}) =>
//       this.request<AsynchronousOperationsDataBulkOperationsStatusInterface, ErrorResponse>({
//         path: `/V1/bulk/${bulkUuid}/status`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Get operations count by bulk uuid and status.
//      *
//      * @tags asynchronousOperationsBulkStatusV1
//      * @name AsynchronousOperationsBulkStatusV1GetOperationsCountByBulkIdAndStatusGet
//      * @request GET:/V1/bulk/{bulkUuid}/operation-status/{status}
//      */
//     asynchronousOperationsBulkStatusV1GetOperationsCountByBulkIdAndStatusGet: (
//       bulkUuid: string,
//       status: number,
//       params: RequestParams = {},
//     ) =>
//       this.request<number, ErrorResponse>({
//         path: `/V1/bulk/${bulkUuid}/operation-status/${status}`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Lists the bulk operation items that match specified search criteria.
//      *
//      * @tags asynchronousOperationsOperationRepositoryV1
//      * @name AsynchronousOperationsOperationRepositoryV1GetListGet
//      * @request GET:/V1/bulk
//      */
//     asynchronousOperationsOperationRepositoryV1GetListGet: (
//       query?: {
//         "searchCriteria[filterGroups][0][filters][0][field]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][value]"?: string;
//         "searchCriteria[filterGroups][0][filters][0][conditionType]"?: string;
//         "searchCriteria[sortOrders][0][field]"?: string;
//         "searchCriteria[sortOrders][0][direction]"?: string;
//         "searchCriteria[pageSize]"?: number;
//         "searchCriteria[currentPage]"?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<AsynchronousOperationsDataOperationSearchResultsInterface, ErrorResponse>({
//         path: `/V1/bulk`,
//         method: "GET",
//         query: query,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags amazonPaymentAddressManagementV1
//      * @name AmazonPaymentAddressManagementV1GetShippingAddressPut
//      * @request PUT:/V1/amazon-shipping-address/{amazonOrderReferenceId}
//      */
//     amazonPaymentAddressManagementV1GetShippingAddressPut: (
//       amazonOrderReferenceId: string,
//       amazonPaymentAddressManagementV1GetShippingAddressPutBody: { addressConsentToken: string },
//       params: RequestParams = {},
//     ) =>
//       this.request<string, ErrorResponse>({
//         path: `/V1/amazon-shipping-address/${amazonOrderReferenceId}`,
//         method: "PUT",
//         body: amazonPaymentAddressManagementV1GetShippingAddressPutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags amazonPaymentAddressManagementV1
//      * @name AmazonPaymentAddressManagementV1GetBillingAddressPut
//      * @request PUT:/V1/amazon-billing-address/{amazonOrderReferenceId}
//      */
//     amazonPaymentAddressManagementV1GetBillingAddressPut: (
//       amazonOrderReferenceId: string,
//       amazonPaymentAddressManagementV1GetBillingAddressPutBody: { addressConsentToken: string },
//       params: RequestParams = {},
//     ) =>
//       this.request<string, ErrorResponse>({
//         path: `/V1/amazon-billing-address/${amazonOrderReferenceId}`,
//         method: "PUT",
//         body: amazonPaymentAddressManagementV1GetBillingAddressPutBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags amazonPaymentOrderInformationManagementV1
//      * @name AmazonPaymentOrderInformationManagementV1RemoveOrderReferenceDelete
//      * @request DELETE:/V1/amazon/order-ref
//      */
//     amazonPaymentOrderInformationManagementV1RemoveOrderReferenceDelete: (params: RequestParams = {}) =>
//       this.request<any, ErrorResponse>({
//         path: `/V1/amazon/order-ref`,
//         method: "DELETE",
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * @description Returns details required to be able to submit a payment with apple pay.
//      *
//      * @tags payPalBraintreeAuthV1
//      * @name PayPalBraintreeAuthV1GetGet
//      * @request GET:/V1/applepay/auth
//      */
//     payPalBraintreeAuthV1GetGet: (params: RequestParams = {}) =>
//       this.request<PayPalBraintreeDataAuthDataInterface, ErrorResponse>({
//         path: `/V1/applepay/auth`,
//         method: "GET",
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Query Vertex to cleanse an address
//      *
//      * @tags vertexAddressValidationApiCleanseAddressV1
//      * @name VertexAddressValidationApiCleanseAddressV1CleanseAddressPost
//      * @request POST:/V1/address/cleanse
//      */
//     vertexAddressValidationApiCleanseAddressV1CleanseAddressPost: (
//       vertexAddressValidationApiCleanseAddressV1CleanseAddressPostBody: {
//         address: VertexAddressValidationApiDataAddressInterface;
//         scopeCode?: string;
//         scopeType?: string;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<VertexAddressValidationApiDataCleansedAddressInterface, ErrorResponse>({
//         path: `/V1/address/cleanse`,
//         method: "POST",
//         body: vertexAddressValidationApiCleanseAddressV1CleanseAddressPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * @description Query Vertex to cleanse an address
//      *
//      * @tags vertexAddressValidationApiGuestCleanseAddressV1
//      * @name VertexAddressValidationApiGuestCleanseAddressV1CleanseAddressPost
//      * @request POST:/V1/guest-address/cleanse
//      */
//     vertexAddressValidationApiGuestCleanseAddressV1CleanseAddressPost: (
//       vertexAddressValidationApiGuestCleanseAddressV1CleanseAddressPostBody: {
//         cartId: string;
//         address: VertexAddressValidationApiDataAddressInterface;
//         scopeCode?: string;
//         scopeType?: string;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<VertexAddressValidationApiDataCleansedAddressInterface, ErrorResponse>({
//         path: `/V1/guest-address/cleanse`,
//         method: "POST",
//         body: vertexAddressValidationApiGuestCleanseAddressV1CleanseAddressPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags vertexAddressValidationAddressManagementV1
//      * @name VertexAddressValidationAddressManagementV1GetValidAddressPost
//      * @request POST:/V1/vertex-address-validation/vertex-address
//      */
//     vertexAddressValidationAddressManagementV1GetValidAddressPost: (
//       vertexAddressValidationAddressManagementV1GetValidAddressPostBody: { address: QuoteDataAddressInterface },
//       params: RequestParams = {},
//     ) =>
//       this.request<QuoteDataAddressInterface, ErrorResponse>({
//         path: `/V1/vertex-address-validation/vertex-address`,
//         method: "POST",
//         body: vertexAddressValidationAddressManagementV1GetValidAddressPostBody,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),
//   };
// }
