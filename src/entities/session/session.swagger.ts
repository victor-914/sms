/**
 * @swagger
 * components:
 *   schemas:
 *     Session:
 *       type: object
 *       required:
 *         - name
 *         - startDate
 *         - endDate
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the session
 *         name:
 *           type: string
 *           description: The name of the session
 *         startDate:
 *           type: string
 *           format: date
 *           description: The start date of the session
 *         endDate:
 *           type: string
 *           format: date
 *           description: The end date of the session
 *         isActive:
 *           type: boolean
 *           description: Indicates if the session is currently active
 *       example:
 *         id: 61234567890abcdef1234567
 *         name: "2023/2024 Academic Session"
 *         startDate: "2023-09-01"
 *         endDate: "2024-06-30"
 *         isActive: true
 */

/**
 * @swagger
 * /sessions:
 *   post:
 *     summary: Create a new session
 *     tags: [Sessions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Session'
 *     responses:
 *       201:
 *         description: The session was created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Session'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /sessions:
 *   get:
 *     summary: Retrieve all sessions
 *     tags: [Sessions]
 *     responses:
 *       200:
 *         description: A list of sessions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Session'
 */

/**
 * @swagger
 * /sessions/{id}:
 *   get:
 *     summary: Get session by ID
 *     tags: [Sessions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The session ID
 *     responses:
 *       200:
 *         description: The session description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Session'
 *       404:
 *         description: Session not found
 */

/**
 * @swagger
 * /sessions/{id}:
 *   put:
 *     summary: Update a session
 *     tags: [Sessions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The session ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Session'
 *     responses:
 *       200:
 *         description: The session was updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Session'
 *       404:
 *         description: Session not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /sessions/{id}:
 *   delete:
 *     summary: Delete a session
 *     tags: [Sessions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The session ID
 *     responses:
 *       200:
 *         description: The session was deleted successfully
 *       404:
 *         description: Session not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /sessions/{id}/toggle:
 *   patch:
 *     summary: Activate or deactivate a session
 *     tags: [Sessions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The session ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isActive:
 *                 type: boolean
 *                 description: True to activate, false to deactivate
 *     responses:
 *       200:
 *         description: The session status was updated
 *       404:
 *         description: Session not found
 *       500:
 *         description: Server error
 */
