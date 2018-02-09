CREATE DEFINER=`adopet`@`%` PROCEDURE `app_user`(doAction VARCHAR(45), userData JSON, email VARCHAR(200))
BEGIN
	IF doAction='INSERT' THEN        
		IF JSON_EXTRACT(userData,'$.id') IS NULL THEN
			SET @userExist = (SELECT COUNT(*) FROM adopet.cad_user where email=email);
			IF @userExist > 0 THEN
				SET @senhaCad = JSON_UNQUOTE(JSON_EXTRACT((SELECT json FROM adopet.cad_user where email=email),'$.password'));
                SET @senhaNov = JSON_UNQUOTE(JSON_EXTRACT(userData,'$.password'));
                IF @senhaCad!=@senhaNov THEN 
					SET @json = '{}';
					SET @msg = 3;
				ELSE
					UPDATE adopet.cad_user set json=userData
					WHERE id=JSON_EXTRACT(userData,'$.id');
					SET @json = (SELECT json FROM adopet.cad_user where id=JSON_EXTRACT(userData,'$.id'));
                    SET @msg = 0;
				END IF;
            ELSE
				SET @json = JSON_SET(userData,'$.id',IFNULL((SELECT MAX(id) FROM adopet.cad_user),0)+1);
				INSERT INTO adopet.cad_user (json) values(@json);
                SET @msg = 0;
			END IF;
        ELSE 
			UPDATE adopet.cad_user set json=userData
			WHERE id=JSON_EXTRACT(userData,'$.id');
            SET @json = (SELECT json FROM adopet.cad_user where id=JSON_EXTRACT(userData,'$.id'));
            SET @msg = 0;
        END IF;
        SELECT @json as json,@msg as msg;
	ELSEIF doAction='DELETE' THEN
		DELETE FROM adopet.cad_user WHERE id=JSON_UNQUOTE(JSON_EXTRACT(userData,'$.id'));
        SELECT '{}' as json,
				0 as msg;
	ELSE
		SELECT json FROM adopet.cad_user WHERE JSON_EXTRACT(json,'$.id')=JSON_EXTRACT(userData,'$.id');
	END IF;
END