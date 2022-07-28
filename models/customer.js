const { Model } = require("objection");
const Order = require("./order");

class Customer extends Model {
  static get tableName() {
    return "customer";
  }

  $beforeInsert() {
    this.createdAt = new Date();
  }

  $beforeUpdate() {
    this.updatedAt = new Date();
  }

  static get nameColumn() {
    return "name";
  }

  static get emailColumn() {
    return "email";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", email],
      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        email: { type: "string" },
        createdAt: { type: "string" },
        updatedAt: { type: "string" },
      },
    };
  }
  static relationMappings = {
    order: {
        relation : Model.HasManyRelation,
        modelClass : Order,
        join : {
            from : "customer.id",
            to: "order.customer_id"
        }
    }
  }
}

module.exports = Customer;
