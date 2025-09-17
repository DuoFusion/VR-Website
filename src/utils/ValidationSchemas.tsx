import * as Yup from "yup";
import { FieldOptions, FieldTypeMap } from "../types";

// ---------- Generic field schema factory ----------

type FieldSchemaArgs<K extends keyof FieldTypeMap> = [type: K, options?: FieldOptions<FieldTypeMap[K]>] | [type: K, label: string, options?: FieldOptions<FieldTypeMap[K]>];

export function fieldSchema<K extends keyof FieldTypeMap>(...args: FieldSchemaArgs<K>): FieldTypeMap[K] {
  let type: K;
  let label: string;
  let options: FieldOptions<FieldTypeMap[K]> | undefined;

  if (typeof args[1] === "string") {
    [type, label, options] = args as [K, string, FieldOptions<FieldTypeMap[K]>?];
  } else {
    [type, options] = args as [K, FieldOptions<FieldTypeMap[K]>?];
    label = "Field";
  }

  const { required = true, extraRules, minItems } = options || {};
  let schema: FieldTypeMap[K];

  switch (type) {
    case "string":
      schema = Yup.string() as FieldTypeMap[K];
      schema = required ? (schema.required(`${label} is required`) as FieldTypeMap[K]) : (schema.nullable().notRequired() as FieldTypeMap[K]);
      break;

    case "boolean":
      schema = Yup.boolean() as FieldTypeMap[K];
      schema = required ? (schema.required(`${label} is required`) as FieldTypeMap[K]) : (schema.nullable().notRequired() as FieldTypeMap[K]);
      break;

    case "number":
      schema = Yup.number().typeError(`${label} must be a number`) as FieldTypeMap[K];
      schema = required ? (schema.required(`${label} is required`) as FieldTypeMap[K]) : (schema.nullable().notRequired() as FieldTypeMap[K]);
      break;

    case "array":
      schema = Yup.array() as FieldTypeMap[K];
      if (minItems && minItems > 0) {
        schema = (schema as Yup.ArraySchema<any[], Yup.AnyObject>).min(minItems, `${label} is required`) as FieldTypeMap[K];
      }
      schema = required ? (schema.required(`${label} is required`) as FieldTypeMap[K]) : (schema.notRequired() as FieldTypeMap[K]);
      break;

    default:
      throw new Error(`Unsupported field type: ${type}`);
  }

  return extraRules ? extraRules(schema) : schema;
}

// ---------- Schemas ----------

// News Letter
export const NewsLetterSchema = Yup.object({
  email: fieldSchema("string", "email"),
});

// Contact Us
export const ContactUsSchema = Yup.object({
  name: fieldSchema("string", "name"),
  email: fieldSchema("string", "email"),
  message: fieldSchema("string", "message"),
  phoneNumber: fieldSchema("string", "phone Number", { extraRules: (s) => s.matches(/^[0-9]{10}$/, "Phone number must be 10 digits") }),
});

export const WorkshopRegisterSchema = Yup.object({
  name: fieldSchema("string", "name"),
  gender: fieldSchema("string", "gender"),
  standard: fieldSchema("string", "standard"),
  schoolName: fieldSchema("string", "school Name"),
  city: fieldSchema("string", "city"),
  whatsAppNumber: fieldSchema("string", "phone Number"),
  email: fieldSchema("string", "email", { extraRules: (s) => s.email("Invalid email address") }),
  previousPercentage: fieldSchema("number", "previous Percentage"),
  targetPercentage: fieldSchema("number", "target Percentage"),
  goal: fieldSchema("string", "goal"),
});

export const CoursesRegisterSchema = Yup.object({
  name: fieldSchema("string", "name"),
  gender: fieldSchema("string", "gender"),
  standard: fieldSchema("string", "standard"),
  schoolName: fieldSchema("string", "school Name"),
  city: fieldSchema("string", "city"),
  whatsAppNumber: fieldSchema("string", "phone Number"),
  email: fieldSchema("string", "email", { extraRules: (s) => s.email("Invalid email address") }),
  previousPercentage: fieldSchema("number", "previous Percentage"),
  targetPercentage: fieldSchema("number", "target Percentage"),
  goal: fieldSchema("string", "goal"),
});
