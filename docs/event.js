/**
 * @swagger
 * /events:
 *   get:
 *     summary: Get Events
 *     tags:
 *      - Event
 *     produces:
 *        application/json
 *     parameters:
 *        - in: header
 *          name: Authorization
 *          default: Bearer TOKEN
 *          description: An authorization header (Bearer JWT)
 *          required: true
 *     responses:
 *       200:
 *         description: success
 *       401:
 *         description: unauthorized
 *       500:
 *         description: internal server error
 *   post:
 *     summary: Create Event
 *     tags:
 *      - Event
 *     produces:
 *        application/json
 *     parameters:
 *        - in: header
 *          name: Authorization
 *          default: Bearer TOKEN
 *          description: An authorization header (Bearer JWT)
 *          required: true
 *        - in: body
 *          name: body
 *          description: Parameter that needs to be added to the api
 *          schema:
 *            type: object
 *            properties:
 *              subscriber_id:
 *                type: integer
 *              dichotomy_id:
 *                type: string
 *              group_id:
 *                type: string
 *            example:
 *              subscriber_id: 5006303
 *              dichotomy_id: 5b88ea6964989d3e39b8a6ed
 *              group_id: 5b890c29629d5c57791361ce
 *     responses:
 *       200:
 *         description: success
 *       401:
 *         description: unauthorized
 *       500:
 *         description: internal server error
 *
 * /events/{id}:
 *   get:
 *     summary: Detail Event
 *     tags:
 *      - Event
 *     produces:
 *        application/json
 *     parameters:
 *        - in: header
 *          name: Authorization
 *          default: Bearer TOKEN
 *          description: An authorization header (Bearer JWT)
 *          required: true
 *        - in: path
 *          name: id
 *          description: Event Id
 *     responses:
 *       200:
 *         description: success
 *       401:
 *         description: unauthorized
 *       500:
 *         description: internal server error
 *   put:
 *     summary: Update Event
 *     tags:
 *      - Event
 *     produces:
 *        application/json
 *     parameters:
 *        - in: header
 *          name: Authorization
 *          default: Bearer TOKEN
 *          description: An authorization header (Bearer JWT)
 *          required: true
 *        - in: path
 *          name: id
 *          description: Event Id
 *        - in: body
 *          name: body
 *          description: Parameter that needs to be added to the api
 *          schema:
 *            type: object
 *            properties:
 *              subscriber_id:
 *                type: integer
 *              dichotomy_id:
 *                type: string
 *              group_id:
 *                type: string
 *            example:
 *              subscriber_id: 5006303
 *              dichotomy_id: 5b88ea6964989d3e39b8a6ed
 *              group_id: 5b890c29629d5c57791361ce
 *     responses:
 *       200:
 *         description: success
 *       401:
 *         description: unauthorized
 *       500:
 *         description: internal server error
 *   delete:
 *     summary: Delete Event
 *     tags:
 *      - Event
 *     produces:
 *        application/json
 *     parameters:
 *        - in: header
 *          name: Authorization
 *          default: Bearer TOKEN
 *          description: An authorization header (Bearer JWT)
 *          required: true
 *        - in: path
 *          name: id
 *          description: Event Id
 *     responses:
 *       200:
 *         description: success
 *       401:
 *         description: unauthorized
 *       500:
 *         description: internal server error
 */
