package com.example.produto;

import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    private final ProdutoRepository repository;

    public ProdutoController(ProdutoRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public ResponseEntity<List<Produto>> listarTodos(
            @RequestParam(required = false) String nome,
            @RequestParam(required = false) String categoria,
            @RequestParam(required = false) Double precoMax) {

        Specification<Produto> spec = (root, query, cb) -> {
            List<Predicate> predicados = new ArrayList<>();

            if (nome != null) {
                predicados.add(cb.like(cb.lower(root.get("nome")),
                        "%" + nome.toLowerCase() + "%"));
            }
            if (categoria != null) {
                predicados.add(cb.equal(cb.lower(root.get("categoria")),
                        categoria.toLowerCase()));
            }
            if (precoMax != null) {
                predicados.add(cb.lessThanOrEqualTo(root.get("preco"), precoMax));
            }

            return cb.and(predicados.toArray(new Predicate[0]));
        };

        return ResponseEntity.ok(repository.findAll(spec));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> buscarPorId(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Produto> adicionar(@RequestBody Produto novoProduto) {
        novoProduto.setId(null); // garante que o banco gere o id
        Produto salvo = repository.save(novoProduto);
        return ResponseEntity.status(HttpStatus.CREATED).body(salvo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Produto> atualizar(@PathVariable Long id,
                                             @RequestBody Produto produtoAtualizado) {
        return repository.findById(id)
                .map(p -> {
                    p.setNome(produtoAtualizado.getNome());
                    p.setPreco(produtoAtualizado.getPreco());
                    p.setCategoria(produtoAtualizado.getCategoria());
                    return ResponseEntity.ok(repository.save(p));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        if (!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}