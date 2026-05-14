/**
 * Extend the base Item document.
 */
export class TrilhamargaItem extends Item {
  /**
   * Augment the basic Item data model with additional dynamic data.
   */
  prepareData() {
    super.prepareData();
    if (['weapon', 'armor', 'shield'].includes(this.type)) {
      this.system.stackable = false;
    }
  }
}
