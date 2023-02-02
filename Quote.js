class Quote {
  constructor(quoteData) {
    this.id = quoteData.id;
    this.content = quoteData.content;
    this.person = quoteData.originator.name;
  }
}
