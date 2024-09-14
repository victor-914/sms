/**
 * @swagger
 * components:
 *   schemas:
 *     Principal:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "614b1e7f1b92f9f5423b1a3d"
 *         firstName:
 *           type: string
 *           example: "John"
 *         lastName:
 *           type: string
 *           example: "Doe"
 *         email:
 *           type: string
 *           example: "john.doe@example.com"
 *         phoneNumber:
 *           type: string
 *           example: "+1234567890"
 *         schoolId:
 *           type: string
 *           example: "614b1e7f1b92f9f5423b1a3e"
 */

/**
 * @swagger
 * /principals:
 *   get:
 *     summary: Get all principals
 *     tags: [Principal]
 *     responses:
 *       200:
 *         description: List of principals
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Principal'
 */

/**
 * @swagger
 * /principals:
 *   post:
 *     summary: Create a new principal
 *     tags: [Principal]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Principal'
 *     responses:
 *       201:
 *         description: Principal created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Principal'
 */

/**
 * @swagger
 * /principals/{id}:
 *   get:
 *     summary: Get a principal by ID
 *     tags: [Principal]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the principal to get
 *     responses:
 *       200:
 *         description: Principal found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Principal'
 *       404:
 *         description: Principal not found
 */

/**
 * @swagger
 * /principals/{id}:
 *   put:
 *     summary: Update a principal by ID
 *     tags: [Principal]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the principal to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Principal'
 *     responses:
 *       200:
 *         description: Principal updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Principal'
 *       404:
 *         description: Principal not found
 */

/**
 * @swagger
 * /principals/{id}:
 *   delete:
 *     summary: Delete a principal by ID
 *     tags: [Principal]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the principal to delete
 *     responses:
 *       200:
 *         description: Principal deleted successfully
 *       404:
 *         description: Principal not found
 */
