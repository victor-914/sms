/**
 * @swagger
 * components:
 *   schemas:
 *     School:
 *       type: object
 *       required:
 *         - name
 *         - owner
 *         - ownerContact
 *         - abbreviation
 *         - type
 *         - address
 *         - companyRegistrationId
 *         - phoneNumber
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the school
 *           example: '64f637bd9e752ed229c2a46e'
 *         name:
 *           type: string
 *           description: Name of the school
 *           example: Green Valley High School
 *         owner:
 *           type: string
 *           description: Name of the school owner
 *           example: John Doe
 *         ownerContact:
 *           type: object
 *           properties:
 *             phone:
 *               type: string
 *               description: Phone number of the owner
 *               example: '+1-555-1234'
 *             email:
 *               type: string
 *               description: Email address of the owner
 *               example: 'owner@example.com'
 *         abbreviation:
 *           type: string
 *           description: Abbreviation for the school name
 *           example: GVHS
 *         type:
 *           type: string
 *           description: Type of the school
 *           enum: [Public, Private, Charter, International]
 *           example: Private
 *         address:
 *           type: object
 *           description: Address of the school
 *           properties:
 *             street:
 *               type: string
 *               description: Street name and number
 *               example: '123 Elm Street'
 *             city:
 *               type: string
 *               description: City name
 *               example: Springfield
 *             state:
 *               type: string
 *               description: State or province
 *               example: Illinois
 *             postalCode:
 *               type: string
 *               description: Postal or zip code
 *               example: '62704'
 *             country:
 *               type: string
 *               description: Country
 *               example: USA
 *             province:
 *               type: string
 *               description: Province of the country
 *         companyRegistrationId:
 *           type: string
 *           description: Registration ID of the school
 *         phoneNumber:
 *           type: string
 *           description: Contact phone number of the school
 *         email:
 *           type: string
 *           description: Email address of the school
 *           format: email
 */

/**
 * @swagger
 * /api/core/schools:
 *   get:
 *     summary: Get all schools
 *     tags: [Schools]
 *     responses:
 *       '200':
 *         description: List of all schools
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/School'
 *   post:
 *     summary: Create a new school
 *     tags: [Schools]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/School'
 *     responses:
 *       '201':
 *         description: School created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/School'
 */

/**
 * @swagger
 * /api/core/schools/{id}:
 *   get:
 *     summary: Get a school by ID
 *     tags: [Schools]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the school to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: School details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/School'
 *       '404':
 *         description: School not found
 *   put:
 *     summary: Update a school by ID
 *     tags: [Schools]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the school to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/School'
 *     responses:
 *       '200':
 *         description: School updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/School'
 *       '404':
 *         description: School not found
 *   delete:
 *     summary: Delete a school by ID
 *     tags: [Schools]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the school to delete
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: School deleted successfully
 *       '404':
 *         description: School not found
 */
