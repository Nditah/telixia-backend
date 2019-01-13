define({ "api": [
  {
    "type": "post",
    "url": "/api/alerts",
    "title": "Create alerts",
    "name": "CreateAsset",
    "group": "Asset",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Asset user  fk</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Asset label</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Asset",
            "description": "<p>Asset's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Asset not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/transaction/routes.js",
    "groupTitle": "Asset"
  },
  {
    "type": "delete",
    "url": "/api/alerts/{recordId}",
    "title": "Delete alerts",
    "name": "DeleteAsset",
    "group": "Asset",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Asset not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/transaction/routes.js",
    "groupTitle": "Asset"
  },
  {
    "type": "get",
    "url": "/api/alerts?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveAsset",
    "group": "Asset",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i http://localhost/api/alerts?id=2&fields=id,created_at,updated_at",
        "type": "curl"
      },
      {
        "title": "Example usage for retieving multiple records:",
        "content": "curl -i http://localhost/api/alerts?offset=10&limit=50",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the record to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Number of records to skip (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fields",
            "description": "<p>Comma-separated list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/transaction/routes.js",
    "groupTitle": "Asset"
  },
  {
    "type": "put",
    "url": "/api/alerts/{recordId}",
    "title": "Update alerts",
    "name": "UpdateAsset",
    "group": "Asset",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Asset user  fk</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Asset label</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Asset",
            "description": "<p>Asset's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Asset not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/transaction/routes.js",
    "groupTitle": "Asset"
  },
  {
    "type": "post",
    "url": "/api/contact-us",
    "title": "Create contact-us",
    "name": "CreateContactUs",
    "group": "ContactUs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>ContactUs fullname (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>ContactUs email (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>ContactUs phone (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>ContactUs subject (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>ContactUs message (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_type",
            "description": "<p>ContactUs request_type: &quot;COMPLAINT&quot;, &quot;ENQUIRY&quot;, &quot;SUGGESTION&quot;, (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_status",
            "description": "<p>ContactUs request_status: &quot;PENDING&quot;, &quot;ACTIVE&quot;, &quot;CLOSED&quot; (prohibited)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>ContactUs remark (prohibited)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "has_ticket",
            "description": "<p>ContactUs has_ticket (prohibited)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ContactUs",
            "description": "<p>ContactUs's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>ContactUs not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/contact-us/routes.js",
    "groupTitle": "ContactUs"
  },
  {
    "type": "delete",
    "url": "/api/contact-us/{recordId}",
    "title": "Delete contact-us",
    "name": "DeleteContactUs",
    "group": "ContactUs",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>ContactUs not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/contact-us/routes.js",
    "groupTitle": "ContactUs"
  },
  {
    "type": "get",
    "url": "/api/contact-us?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveContactUs",
    "group": "ContactUs",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i http://localhost/api/contact-us?id=2&fields=id,created_at,updated_at",
        "type": "curl"
      },
      {
        "title": "Example usage for retieving multiple records:",
        "content": "curl -i http://localhost/api/contact-us?offset=10&limit=50",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the record to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Number of records to skip (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fields",
            "description": "<p>Comma-separated list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records of enquiries, suggestions or complaints issues by clients via the website or mobile app contact-us page.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/contact-us/routes.js",
    "groupTitle": "ContactUs"
  },
  {
    "type": "put",
    "url": "/api/contact-us/{recordId}",
    "title": "Update contact-us",
    "name": "UpdateContactUs",
    "group": "ContactUs",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>ContactUs email (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>ContactUs phone (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>ContactUs subject (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>ContactUs message (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_type",
            "description": "<p>ContactUs request_type: &quot;COMPLAINT&quot;, &quot;ENQUIRY&quot;, &quot;SUGGESTION&quot;, (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_status",
            "description": "<p>ContactUs request_status: &quot;PENDING&quot;, &quot;ACTIVE&quot;, &quot;CLOSED&quot; (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>ContactUs remark (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "has_ticket",
            "description": "<p>ContactUs has_ticket (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ContactUs",
            "description": "<p>ContactUs's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>ContactUs not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/contact-us/routes.js",
    "groupTitle": "ContactUs"
  },
  {
    "type": "post",
    "url": "/api/countries",
    "title": "Create countries",
    "name": "CreateCountry",
    "group": "Country",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Country primaryKey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Country name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iso2",
            "description": "<p>Country iso where the state is located</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iso3",
            "description": "<p>Country iso3 (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callingCodes",
            "description": "<p>Country callingCodes (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currencies",
            "description": "<p>Country currencies (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ioc",
            "description": "<p>Country ioc (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "languages",
            "description": "<p>Country languages (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Country status (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "created_by",
            "description": "<p>Country record created by</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Country",
            "description": "<p>Country's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Country not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/country/routes.js",
    "groupTitle": "Country"
  },
  {
    "type": "delete",
    "url": "/api/countries/{recordId}",
    "title": "Delete countries",
    "name": "DeleteCountry",
    "group": "Country",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Country not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/country/routes.js",
    "groupTitle": "Country"
  },
  {
    "type": "get",
    "url": "/api/countries?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveCountry",
    "group": "Country",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i http://localhost/api/countries?id=2&fields=id,created_at,updated_at",
        "type": "curl"
      },
      {
        "title": "Example usage for retieving multiple records:",
        "content": "curl -i http://localhost/api/countries?offset=10&limit=50",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the record to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Number of records to skip (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fields",
            "description": "<p>Comma-separated list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records countries of operation</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/country/routes.js",
    "groupTitle": "Country"
  },
  {
    "type": "put",
    "url": "/api/countries/{recordId}",
    "title": "Update countries",
    "name": "UpdateCountry",
    "group": "Country",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "recordId",
            "description": "<p>Country record id (primaryKey)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Country name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iso2",
            "description": "<p>Country iso where the state is located</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iso3",
            "description": "<p>Country iso3 (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callingCodes",
            "description": "<p>Country callingCodes (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currencies",
            "description": "<p>Country currencies (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ioc",
            "description": "<p>Country ioc (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "languages",
            "description": "<p>Country languages (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Country status (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "updated_by",
            "description": "<p>Country record modified by</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Country",
            "description": "<p>Country's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Country not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/country/routes.js",
    "groupTitle": "Country"
  },
  {
    "type": "post",
    "url": "/api/customers",
    "title": "Create customers",
    "name": "CreateCustomer",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Customer primaryKey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer",
            "description": "<p>type &quot;INDIVIDUAL&quot;, &quot;ORGANIZATION&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Customer surname (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "other_name",
            "description": "<p>Customer other name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Customer gender (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birth_date",
            "description": "<p>Customer date of birth</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Customer phone number (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone2",
            "description": "<p>Customer mobile work or home phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Customer email address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Customer password for accessing the App</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_person",
            "description": "<p>Customer next-of-kin, or contact person</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_person_phone",
            "description": "<p>Customer next-of-kin, or contact person phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product",
            "description": "<p>Customer products of services of interest</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Customer photo url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Customer residential or work address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_iso2",
            "description": "<p>Customer country of residence (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_pmt_client",
            "description": "<p>assert that client is also a PMT customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_pesl_client",
            "description": "<p>assert that client is also a PESL customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_pet_client",
            "description": "<p>assert that client is also a PET customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_shop_client",
            "description": "<p>assert that client is also a SHOP customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_tenant",
            "description": "<p>assert if customer is a depot tenant</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_phone_verified",
            "description": "<p>phone verification status</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_email_verified",
            "description": "<p>email verification status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>comment about customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "created_by",
            "description": "<p>(required) id of the staff who created the record</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "updated_by",
            "description": "<p>id of the staff who created the record</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Customer",
            "description": "<p>Customer's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Customer not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/customer/routes.js",
    "groupTitle": "Customer"
  },
  {
    "type": "delete",
    "url": "/api/customers/{recordId}",
    "title": "Delete customers",
    "name": "DeleteCustomer",
    "group": "Customer",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Customer not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/customer/routes.js",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/api/customers/login",
    "title": "Login Customer",
    "name": "LoginCustomer",
    "group": "Customer",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Customer email address (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Customer password (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Customer mobile phone number (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>Customer One-Time-Password sent to phone (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Login Successful.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Customer not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/customer/routes.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/customers?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveCustomer",
    "group": "Customer",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i http://localhost/api/customers?id=2&fields=id,created_at,updated_at",
        "type": "curl"
      },
      {
        "title": "Example usage for retieving multiple records:",
        "content": "curl -i http://localhost/api/customers?offset=10&limit=50",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the record to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Number of records to skip (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fields",
            "description": "<p>Comma-separated list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records of consolidated list of customers from PMT, PML, PET, Shop etc</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/customer/routes.js",
    "groupTitle": "Customer"
  },
  {
    "type": "put",
    "url": "/api/customers/{recordId}",
    "title": "Update customers",
    "name": "UpdateCustomer",
    "group": "Customer",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Customer primaryKey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer",
            "description": "<p>type &quot;INDIVIDUAL&quot;, &quot;ORGANIZATION&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Customer surname (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "other_name",
            "description": "<p>Customer other name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Customer gender (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birth_date",
            "description": "<p>Customer date of birth</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Customer phone number (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone2",
            "description": "<p>Customer mobile work or home phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Customer email address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Customer password for accessing the App</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_person",
            "description": "<p>Customer next-of-kin, or contact person</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_person_phone",
            "description": "<p>Customer next-of-kin, or contact person phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product",
            "description": "<p>Customer products of services of interest</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Customer photo url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Customer residential or work address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_iso2",
            "description": "<p>Customer country of residence (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_pmt_client",
            "description": "<p>assert that client is also a PMT customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_pesl_client",
            "description": "<p>assert that client is also a PESL customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_pet_client",
            "description": "<p>assert that client is also a PET customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_shop_client",
            "description": "<p>assert that client is also a SHOP customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_tenant",
            "description": "<p>assert if customer is a depot tenant</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_phone_verified",
            "description": "<p>phone verification status</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_email_verified",
            "description": "<p>email verification status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>comment about customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "created_by",
            "description": "<p>(required) id of the staff who created the record</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "updated_by",
            "description": "<p>id of the staff who created the record</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Customer",
            "description": "<p>Customer's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Customer not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/customer/routes.js",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/api/staff",
    "title": "Create staff",
    "name": "CreateStaff",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Staff primaryKey</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "created_by",
            "description": "<p>Staff record created by</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Staff",
            "description": "<p>Staff's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Staff not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/staff/routes.js",
    "groupTitle": "Employee"
  },
  {
    "type": "delete",
    "url": "/api/staff/{recordId}",
    "title": "Delete staff",
    "name": "DeleteStaff",
    "group": "Employee",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Staff not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/staff/routes.js",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/api/staff/login",
    "title": "Login Staff",
    "name": "LoginStaff",
    "group": "Employee",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Staff email address (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Staff password (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "office_phone",
            "description": "<p>Staff official phone number (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>Staff One-Time-Password sent to phone (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Login Successful.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Staff not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/staff/routes.js",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/api/staff?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveStaff",
    "group": "Employee",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i http://localhost/api/staff?id=2&fields=id,created_at,updated_at",
        "type": "curl"
      },
      {
        "title": "Example usage for retieving multiple records:",
        "content": "curl -i http://localhost/api/staff?offset=10&limit=50",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the record to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Number of records to skip (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fields",
            "description": "<p>Comma-separated list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records of staff distributed across terminals.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/staff/routes.js",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "/api/staff/{recordId}",
    "title": "Update staff",
    "name": "UpdateStaff",
    "group": "Employee",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "recordId",
            "description": "<p>Staff record id (primaryKey)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Staff short name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "updated_by",
            "description": "<p>Staff record modified by</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Staff",
            "description": "<p>Staff's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Staff not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/staff/routes.js",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/api/images",
    "title": "Create image-assets",
    "name": "CreateImage",
    "group": "Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>required image-asset name</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>required image-asset</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "image-asset",
            "description": "<p>record's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "description": "<p>Images uploaded to this endpoint are stored locally on the backend server. This is only a fall back option when AWS is no longer available.</p>",
    "version": "0.0.0",
    "filename": "src/api/image/routes.js",
    "groupTitle": "Image"
  },
  {
    "type": "post",
    "url": "/api/images-aws",
    "title": "Create image-assets",
    "name": "CreateImageAws",
    "group": "Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>required image-asset name</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>required image-asset</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "image-asset",
            "description": "<p>record's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "description": "<p>Images uploaded to this endpoint are stored on AWS.</p>",
    "version": "0.0.0",
    "filename": "src/api/image/routes.js",
    "groupTitle": "Image"
  },
  {
    "type": "delete",
    "url": "/api/images/{recordId}",
    "title": "Delete image-assets",
    "name": "DeleteImage",
    "group": "Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>image-asset not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/image/routes.js",
    "groupTitle": "Image"
  },
  {
    "type": "get",
    "url": "/api/images?{query}",
    "title": "Retrieve all image-assets",
    "name": "RetrieveImages",
    "group": "Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "description": "<p>image-assets name and url are stored on db. The images themselves are stored on the AWS Bucket. The url points to it.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rows",
            "description": "<p>List of image-assets.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/image/routes.js",
    "groupTitle": "Image"
  },
  {
    "type": "get",
    "url": "/api/upload",
    "title": "to get the form for uploading images",
    "name": "RetrieveUploadForm",
    "group": "Image",
    "description": "<p>The sample form allows you to test the API by uploading and image and entering the image name that would be saved on db</p>",
    "version": "0.0.0",
    "filename": "src/api/image/routes.js",
    "groupTitle": "Image"
  },
  {
    "type": "put",
    "url": "/api/images/{ImageId}",
    "title": "Update image-assets",
    "name": "UpdateImage",
    "group": "Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>required image-asset name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>required image-asset url on cloud</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/image/routes.js",
    "groupTitle": "Image"
  },
  {
    "type": "post",
    "url": "/api/settings",
    "title": "Create settings",
    "name": "CreateSetting",
    "group": "Setting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Setting primaryKey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Setting varaible name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Setting category of domains affected</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "control",
            "description": "<p>Setting control value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Setting description</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Setting",
            "description": "<p>Setting's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Setting not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/setting/routes.js",
    "groupTitle": "Setting"
  },
  {
    "type": "delete",
    "url": "/api/settings/{recordId}",
    "title": "Delete settings",
    "name": "DeleteSetting",
    "group": "Setting",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Setting not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/setting/routes.js",
    "groupTitle": "Setting"
  },
  {
    "type": "get",
    "url": "/api/settings?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveSetting",
    "group": "Setting",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i http://localhost/api/settings?id=2&fields=id,created_at,updated_at",
        "type": "curl"
      },
      {
        "title": "Example usage for retieving multiple records:",
        "content": "curl -i http://localhost/api/settings?offset=10&limit=50",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the record to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Number of records to skip (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fields",
            "description": "<p>Comma-separated list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records of Software adjustable and default parameters. Labels and contents for the website are kept here.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/setting/routes.js",
    "groupTitle": "Setting"
  },
  {
    "type": "put",
    "url": "/api/settings/{recordId}",
    "title": "Update settings",
    "name": "UpdateSetting",
    "group": "Setting",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "recordId",
            "description": "<p>Setting record id (primaryKey)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Setting varaible name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Setting category of domains affected</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "control",
            "description": "<p>Setting control value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Setting description</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "updated_by",
            "description": "<p>Setting record modified by</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Setting",
            "description": "<p>Setting's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Setting not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/setting/routes.js",
    "groupTitle": "Setting"
  },
  {
    "description": "<p>Generic Features: Image routes</p>",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/api/image/routes.js",
    "group": "_home_mentor_Projects_Telixia_telixia_app_src_api_image_routes_js",
    "groupTitle": "_home_mentor_Projects_Telixia_telixia_app_src_api_image_routes_js",
    "name": ""
  }
] });
