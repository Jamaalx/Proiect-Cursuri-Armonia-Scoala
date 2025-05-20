run backend localhost: npm run dev
build backend + frontend deploy: npm run build (root folder and will build back and front)
run backend deploy: npm run start

run frontend localhost: npm run devDependencies
build frontend deploy: npm run build

do not provide port on deploy, do not need.

in github console generate base64 secret key command
openssl rand -base64 32

MONGOOSE METHODS
/**
 * Common Mongoose Model Methods:
 *
 * - create(doc)
 *   Creates and saves a new document to the database.
 *
 * - find(filter, projection?, options?)
 *   Finds all documents matching the filter criteria.
 *
 * - findOne(filter, projection?, options?)
 *   Finds a single document (the first that matches the filter).
 *
 * - findById(id)
 *   Finds a document by its `_id`.
 *
 * - findOneAndUpdate(filter, update, options?)
 *   Finds a single document and updates it in one operation.
 *
 * - findByIdAndUpdate(id, update, options?)
 *   Same as above, but uses `_id` directly.
 *
 * - findOneAndDelete(filter)
 *   Finds and deletes one document matching the filter.
 *
 * - findByIdAndDelete(id)
 *   Finds and deletes a document by `_id`.
 *
 * - updateOne(filter, update, options?)
 *   Updates a single document matching the filter.
 *
 * - updateMany(filter, update, options?)
 *   Updates multiple documents that match the filter.
 *
 * - deleteOne(filter)
 *   Deletes one document that matches the filter.
 *
 * - deleteMany(filter)
 *   Deletes all documents that match the filter.
 *
 * - countDocuments(filter)
 *   Returns the number of documents that match the filter.
 *
 * - estimatedDocumentCount()
 *   Returns an estimated count of total documents in the collection.
 *
 * - aggregate(pipeline)
 *   Runs an aggregation pipeline (for complex data queries).
 *
 * - insertMany([docs])
 *   Inserts multiple documents at once.
 *
 * - exists(filter)
 *   Checks whether at least one document matches the filter (returns a boolean).
 *
 * - populate(path)
 *   Automatically replaces referenced document IDs with the actual documents.
 *
 * - lean()
 *   Returns plain JavaScript objects instead of full Mongoose documents (faster).
 */
