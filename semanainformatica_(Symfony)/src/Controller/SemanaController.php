<?php

namespace App\Controller;


use App\Entity\Ponencia;
use App\Entity\Taler;
use App\Entity\Usuario;
use App\Entity\Categoriaponencia;
use App\Entity\Categoriataller;
use App\Form\PonenciaType;
use App\Form\TallerType;
use App\Form\UsuarioType;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\HttpFoundation\Request;

class SemanaController extends AbstractController {
    /**
     * @Route("/ponencia", name="ponencia")
     */
    public function ponencias(){
        $repositorio = $this->getDoctrine()->getRepository(Ponencia::class);
        $libro = $repositorio->findAll();

        return $this->render('ponencias.html.twig', array('ponencias' => $libro));
    }

    /**
     * @Route("/taller", name="taller")
     */
    public function talleres(){
        $repositorio = $this->getDoctrine()->getRepository(Taler::class);
        $search = $repositorio->findAll();
        
        return $this->render('talleres.html.twig', array('talleres' => $search));
    }

    /**
     * @Route("/usuario", name="usuarios")
     */

    public function usuarios() {
        $repositorio = $this->getDoctrine()->getRepository(Usuario::class);
        $usuario = $repositorio->findAll();
        
        return $this->render('list_user.html.twig', array('registrar' => $usuario));
    }

    /**
     * @Route("/ponencia/eliminar/{id}", name="borraPonencia")
     */
    public function eliminarPonencia($id){
        $entityManager = $this->getDoctrine()->getManager();
        $repositorio = $this->getDoctrine()->getRepository(Ponencia::class);
        $ids = $repositorio->find($id);
        if($ids){
            $entityManager->remove($ids);
            $entityManager->flush();
        }
        
        return $this->redirectToRoute('ponencia');
    }

    /**
     * @Route("/taller/eliminar/{id}", name="borraTaller")
     */
    public function eliminarTaller($id){
        $entityManager = $this->getDoctrine()->getManager();
        $repositorio = $this->getDoctrine()->getRepository(Taler::class);
        $ids = $repositorio->find($id);
        if($ids){
            $entityManager->remove($ids);
            $entityManager->flush();
        }
        
        return $this->redirectToRoute('taller');
    }
    
    /**
     * @Route("/ponencia/nueva", name="newPonencia")
     */
    public function nuevaPonencia(Request $request) {
        $libro = new Ponencia();
        $formulario = $this->createForm(PonenciaType::class, $libro);

        $formulario->handleRequest($request);

        if($formulario->isSubmitted() && $formulario->isValid()) {
            $libro = $formulario->getData();
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($libro);
            $entityManager->flush();
            return $this->redirectToRoute('ponencia');
        }

        return $this->render('nueva_ponencia.html.twig', array('formulario' => $formulario->createView()));  
    }

    /**
     * @Route("/taller/nuevo", name="newTaller")
     */
    public function nuevoTaller(Request $request) {
        $libro = new Taler();
        $formulario = $this->createForm(TallerType::class, $libro);

        $formulario->handleRequest($request);

        if($formulario->isSubmitted() && $formulario->isValid()) {
            $libro = $formulario->getData();
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($libro);
            $entityManager->flush();
            return $this->redirectToRoute('taller');
        }

        return $this->render('nuevo_taller.html.twig', array('formulario' => $formulario->createView()));        
    }
    
    /**
     * @Route("/usuario/editar/{id}", name="editar_usuario")
     */
    public function editarUsuario(Request $request, $id) {
        $repositorio=$this->getDoctrine()->getRepository(Usuario::class);
        $registrar=$repositorio->find($id);
        $formulario=$this->createForm(UsuarioType::class,$registrar);
        $formulario->handleRequest($request);

        if($formulario->isSubmitted() && $formulario->isValid()) {
            $registrar = $formulario->getData();
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($registrar);
            $entityManager->flush();
            return $this->redirectToRoute('usuarios');
        }

        return $this->render('editar_user.html.twig', array('formulario' => $formulario->createView(), 'registrar' => $registrar));
    }

    /**
     * @Route("/ponencia/editar/{id}", name="editar_ponencia")
     */
    public function editarPonencia(Request $request, $id) {
        $repositorio=$this->getDoctrine()->getRepository(Ponencia::class);
        $ponencia=$repositorio->find($id);
        $formulario=$this->createForm(PonenciaType::class,$ponencia);
        $formulario->handleRequest($request);

        if($formulario->isSubmitted() && $formulario->isValid()) {
            $ponencia = $formulario->getData();
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($ponencia);
            $entityManager->flush();
            return $this->redirectToRoute('ponencia');
        }

        return $this->render('editar_ponencia.html.twig', array('formulario' => $formulario->createView(), 'libros'=>$ponencia));
    }

    /**
     * @Route("/taller/editar/{id}", name="editar_taller")
     */
    public function editarTaller(Request $request, $id) {
        $repositorio=$this->getDoctrine()->getRepository(Taler::class);
        $taller=$repositorio->find($id);
        $formulario=$this->createForm(TallerType::class,$taller);
        $formulario->handleRequest($request);

        if($formulario->isSubmitted() && $formulario->isValid()) {
            $taller = $formulario->getData();
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($taller);
            $entityManager->flush();
            return $this->redirectToRoute('taller');
        }

        return $this->render('editar_taller.html.twig', array('formulario' => $formulario->createView(), 'libros'=>$taller));
    }

    /**
     * @Route("/ponencia/like/{id}", name="likponencia")
     */
    public function likePonencias($id){
        $entityManager = $this->getDoctrine()->getManager();
        $repositorio = $this->getDoctrine()->getRepository(Ponencia::class);

        $contacto = $repositorio->find($id);
        $contacto->setLikepo((($contacto->getLikepo()) + 1));
        $entityManager->flush();
        
        $libro = $repositorio->findAll();

        return $this->render('ponencias.html.twig', array('ponencias' => $libro));
    }

    /**
     * @Route("/ponencia/dislike/{id}", name="dislikponencia")
     */
    public function dislikePonencias($id){
        $entityManager = $this->getDoctrine()->getManager();
        $repositorio = $this->getDoctrine()->getRepository(Ponencia::class);

        $contacto = $repositorio->find($id);
        if ($contacto->getLikepo() > 0) { $contacto->setLikepo((($contacto->getLikepo()) - 1)); }
        $entityManager->flush();
        
        $libro = $repositorio->findAll();

        return $this->render('ponencias.html.twig', array('ponencias' => $libro));
    }

    /**
     * @Route("/taller/like/{id}", name="liktaller")
     */
    public function likeTalleres($id){
        $entityManager = $this->getDoctrine()->getManager();
        $repositorio = $this->getDoctrine()->getRepository(Taler::class);

        $contacto = $repositorio->find($id);
        $contacto->setLiketa((($contacto->getLiketa()) + 1));
        $entityManager->flush();
        
        $libro = $repositorio->findAll();

        return $this->render('talleres.html.twig', array('talleres' => $libro));
    }

    /**
     * @Route("/taller/dislike/{id}", name="disliktaller")
     */
    public function dislikeTalleres($id){
        $entityManager = $this->getDoctrine()->getManager();
        $repositorio = $this->getDoctrine()->getRepository(Taler::class);

        $contacto = $repositorio->find($id);
        if ($contacto->getLiketa() > 0) { $contacto->setLiketa((($contacto->getLiketa()) - 1)); }
        $entityManager->flush();
        
        $libro = $repositorio->findAll();

        return $this->render('talleres.html.twig', array('talleres' => $libro));
    }

    /**
     * @Route("/usuario/eliminar/{id}", name="borraUsuario")
     */
    public function eliminarUsuario($id){
        $entityManager = $this->getDoctrine()->getManager();
        $repositorio = $this->getDoctrine()->getRepository(Usuario::class);
        $ids = $repositorio->find($id);
        if($ids){
            $entityManager->remove($ids);
            $entityManager->flush();
        }
        
        return $this->redirectToRoute('usuarios');
    }

    /**
     * @Route("/usuario/confirmar/{id}", name="confirmar")
     */
    public function confirmar($id){
        $repositorio=$this->getDoctrine()->getRepository(Usuario::class);
        $registrar=$repositorio->find($id);
        return $this->render('todelete.html.twig', array('s' => $id, 'a' => $registrar));
    }
}

?>